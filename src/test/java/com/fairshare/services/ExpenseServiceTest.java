package com.fairshare.services;

import com.fairshare.Requests.CreateExpenseRequest;
import com.fairshare.entity.Expense;
import com.fairshare.entity.Group;
import com.fairshare.entity.User;
import com.fairshare.entity.UserShare;
import com.fairshare.repository.ExpenseRepository;
import com.fairshare.repository.GroupRepository;
import com.fairshare.repository.UserRepository;
import com.fairshare.repository.UserShareRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.*;

import static org.assertj.core.api.Assertions.assertThat; // Use AssertJ for fluent assertions
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyDouble;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.ArgumentMatchers.eq; // Use eq() for specific primitive values
import static org.mockito.Mockito.*; // Static import for Mockito methods

@ExtendWith(MockitoExtension.class)
class ExpenseServiceTest {

    @InjectMocks
    ExpenseService expenseService;

    @Mock
    ExpenseRepository expenseRepository;

    @Mock
    UserShareRepository userShareRepository;

    @Mock
    UserRepository userRepository;

    @Mock
    GroupRepository groupRepository;

    @Mock
    BalanceService balanceService;

    @Captor
    ArgumentCaptor<Expense> expenseCaptor; // Captor to inspect saved expense

    @Captor
    ArgumentCaptor<UserShare> userShareCaptor; // Captor for user shares

    private User payer;
    private User shareUser1;
    private Group group;
    private CreateExpenseRequest request;
    private List<UserShare> userShares;
    private Integer payerId = 1;
    private Integer groupId = 1;
    private Integer shareUserId1 = 2;


    @BeforeEach
    void setUp() {
        // Common setup for tests
        payer = new User();
        payer.setUserId(payerId);
        payer.setFirstName("Payer");

        shareUser1 = new User();
        shareUser1.setUserId(shareUserId1);
        shareUser1.setFirstName("ShareUser");

        group = new Group();
        group.setGroupId(groupId);
        // Make sure the payer is in the group
        group.setUsers(new HashSet<>(Arrays.asList(payer, shareUser1)));

        UserShare share1 = new UserShare();
        share1.setUserId(shareUserId1); // ID of the user sharing the cost
        share1.setShareAmount(40.0);

        userShares = Collections.singletonList(share1);

        request = new CreateExpenseRequest();
        request.setDescription("Test Description");
        request.setAmount(100.0);
        request.setCurrency("USD");
        request.setCategoryId(1);
        request.setGroupId(groupId);
        request.setUserShares(userShares); // Add user shares to the request
    }

    @Test
    void testAddExpense_Success() {
        // --- Arrange ---
        // Mock repository calls for the successful path
        when(groupRepository.findById(eq(groupId))).thenReturn(Optional.of(group));
        when(userRepository.findById(eq(payerId))).thenReturn(Optional.of(payer));

        // Mock the save operation to simulate ID generation and return the saved entity
        when(expenseRepository.save(any(Expense.class))).thenAnswer(invocation -> {
            Expense expenseToSave = invocation.getArgument(0);
            expenseToSave.setExpenseId(99); // Simulate DB generating an ID
            // Simulate JPA managing the relationship (important!)
            if (expenseToSave.getUserShares() != null) {
                expenseToSave.getUserShares().forEach(us -> us.setExpenseId(expenseToSave));
            }
            return expenseToSave;
        });

        // Mock user share save (can just return the argument)
        when(userShareRepository.save(any(UserShare.class))).thenAnswer(invocation -> invocation.getArgument(0));

        Expense result = expenseService.addExpense(payerId, request);

        // Verify the returned expense object
        assertNotNull(result);
        assertEquals(99, result.getExpenseId()); // Check the simulated generated ID
        assertEquals("Test Description", result.getDescription());
        assertEquals(100.0, result.getAmount());
        assertEquals("USD", result.getCurrency());
        assertEquals(payerId, result.getPayerId());
        assertEquals(1, result.getCategoryId());
        assertEquals(groupId, result.getGroupId());
        assertNotNull(result.getUserShares());
        assertEquals(userShares.size(), result.getUserShares().size()); // Verify shares are associated

        // Verify repository and service interactions using Captors
        verify(expenseRepository, times(1)).save(expenseCaptor.capture());
        Expense savedExpense = expenseCaptor.getValue();
        assertEquals("Test Description", savedExpense.getDescription()); // Check captured expense
        assertEquals(userShares.size(), savedExpense.getUserShares().size()); // Check shares on captured

        // Verify UserShareRepository save was called for each share
        verify(userShareRepository, times(userShares.size())).save(userShareCaptor.capture());
        List<UserShare> savedShares = userShareCaptor.getAllValues();
        assertEquals(shareUserId1, savedShares.get(0).getUserId());
        assertEquals(40.0, savedShares.get(0).getShareAmount());
        assertNotNull(savedShares.get(0).getExpenseId()); // Ensure relationship is set
        assertEquals(99, savedShares.get(0).getExpenseId().getExpenseId());

        // Verify BalanceService update was called correctly for each share
        verify(balanceService, times(userShares.size())).updateBalance(eq(payerId), eq(shareUserId1), eq(40.0));

        // Verify basic repo calls
        verify(groupRepository, times(1)).findById(eq(groupId));
        verify(userRepository, times(1)).findById(eq(payerId));
    }

    // --- Test Cases for Error Paths ---

    @Test
    void testAddExpense_GroupNotFound() {
        when(groupRepository.findById(eq(groupId))).thenReturn(Optional.empty());
        when(userRepository.findById(eq(payerId))).thenReturn(Optional.of(payer)); // User exists

        Expense result = expenseService.addExpense(payerId, request);

        assertNotNull(result);
        assertEquals("GroupNotFoundError", result.getDescription()); // Check error message field
        verify(expenseRepository, never()).save(any()); // Ensure save was not called
        verify(userShareRepository, never()).save(any());
        verify(balanceService, never()).updateBalance(anyInt(), anyInt(), anyDouble());
    }

    @Test
    void testAddExpense_UserNotFound() {
        when(groupRepository.findById(eq(groupId))).thenReturn(Optional.of(group)); // Group exists
        when(userRepository.findById(eq(payerId))).thenReturn(Optional.empty());

        Expense result = expenseService.addExpense(payerId, request);

        assertNotNull(result);
        assertEquals("UserNotFoundError", result.getDescription());
        verify(expenseRepository, never()).save(any());
        verify(userShareRepository, never()).save(any());
        verify(balanceService, never()).updateBalance(anyInt(), anyInt(), anyDouble());
    }

    @Test
    void testAddExpense_GroupAndUserNotFound() {
        when(groupRepository.findById(eq(groupId))).thenReturn(Optional.empty());
        when(userRepository.findById(eq(payerId))).thenReturn(Optional.empty());

        Expense result = expenseService.addExpense(payerId, request);

        assertNotNull(result);
        assertEquals("GroupAndUserNotFoundError", result.getDescription());
        verify(expenseRepository, never()).save(any());
        verify(userShareRepository, never()).save(any());
        verify(balanceService, never()).updateBalance(anyInt(), anyInt(), anyDouble());
    }

    @Test
    void testAddExpense_PayerNotInGroup() {
        Group groupWithoutPayer = new Group(); // Create a group that *doesn't* contain the payer
        groupWithoutPayer.setGroupId(groupId);
        groupWithoutPayer.setUsers(Collections.singleton(shareUser1)); // Only has the shareUser

        when(groupRepository.findById(eq(groupId))).thenReturn(Optional.of(groupWithoutPayer));
        when(userRepository.findById(eq(payerId))).thenReturn(Optional.of(payer));

        Expense result = expenseService.addExpense(payerId, request);

        assertNotNull(result);
        assertEquals("PayerNotInGroupError", result.getDescription());
        verify(expenseRepository, never()).save(any());
        verify(userShareRepository, never()).save(any());
        verify(balanceService, never()).updateBalance(anyInt(), anyInt(), anyDouble());
    }

    // --- Test for getExpensesByGroupId ---

    @Test
    void testGetExpensesByGroupId() {
        // --- Arrange ---
        Expense expense = new Expense();
        expense.setExpenseId(101);
        expense.setDescription("Fetched Expense");
        expense.setAmount(100.0);
        expense.setCurrency("GBP");
        expense.setCategoryId(1);
        expense.setGroupId(groupId);
        expense.setPayerId(payerId); // Payer ID is 1

        User payerForFetch = new User();
        payerForFetch.setUserId(payerId);
        payerForFetch.setFirstName("TestPayerName"); // Set the first name

        when(expenseRepository.findByGroupId(eq(groupId))).thenReturn(Collections.singletonList(expense));
        // Mock the user lookup needed within the service method
        when(userRepository.findById(eq(payerId))).thenReturn(Optional.of(payerForFetch));

        // --- Act ---
        List<Expense> expenses = expenseService.getExpensesByGroupId(groupId);

        // --- Assert ---
        assertNotNull(expenses);
        assertEquals(1, expenses.size());
        Expense fetchedExpense = expenses.get(0);
        assertEquals("Fetched Expense", fetchedExpense.getDescription());
        assertEquals(payerId, fetchedExpense.getPayerId());
        assertEquals("TestPayerName", fetchedExpense.getUserName()); // Assert the user name is set

        // Verify interactions
        verify(expenseRepository, times(1)).findByGroupId(eq(groupId));
        verify(userRepository, times(1)).findById(eq(payerId)); // Verify user lookup
    }

    // --- Test for getTotalExpensesByGroupId ---
    @Test
    void testGetTotalExpensesByGroupId() {
        // --- Arrange ---
        Expense expense1 = new Expense(); expense1.setAmount(50.0); expense1.setGroupId(groupId);
        Expense expense2 = new Expense(); expense2.setAmount(150.0); expense2.setGroupId(groupId);
        List<Expense> expenseList = Arrays.asList(expense1, expense2);

        when(expenseRepository.findByGroupId(eq(groupId))).thenReturn(expenseList);

        // --- Act ---
        double total = expenseService.getTotalExpensesByGroupId(groupId);

        // --- Assert ---
        assertEquals(200.0, total);
        verify(expenseRepository, times(1)).findByGroupId(eq(groupId));
    }
}
