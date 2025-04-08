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
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.*;

class ExpenseServiceTest {

    @InjectMocks
    private ExpenseService expenseService;

    @Mock
    private ExpenseRepository expenseRepository;

    @Mock
    private UserShareRepository userShareRepository;

    @Mock
    private BalanceService balanceService;

    @Mock
    private UserRepository userRepository;

    @Mock
    private GroupRepository groupRepository;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testAddExpense_UserAndGroupNotFound() {
        CreateExpenseRequest request = new CreateExpenseRequest();
        request.setGroupId(1);

        when(userRepository.findById(anyInt())).thenReturn(Optional.empty());
        when(groupRepository.findById(anyInt())).thenReturn(Optional.empty());

        Expense result = expenseService.addExpense(1, request);

        assertEquals("GroupAndUserNotFoundError", result.getDescription());
        verify(userRepository, times(1)).findById(1);
        verify(groupRepository, times(1)).findById(1);
    }

    @Test
    void testAddExpense_UserNotFound() {
        CreateExpenseRequest request = new CreateExpenseRequest();
        request.setGroupId(1);

        when(userRepository.findById(anyInt())).thenReturn(Optional.empty());
        when(groupRepository.findById(anyInt())).thenReturn(Optional.of(new Group()));

        Expense result = expenseService.addExpense(1, request);

        assertEquals("UserNotFoundError", result.getDescription());
        verify(userRepository, times(1)).findById(1);
        verify(groupRepository, times(1)).findById(1);
    }

    @Test
    void testAddExpense_GroupNotFound() {
        CreateExpenseRequest request = new CreateExpenseRequest();
        request.setGroupId(1);

        when(userRepository.findById(anyInt())).thenReturn(Optional.of(new User()));
        when(groupRepository.findById(anyInt())).thenReturn(Optional.empty());

        Expense result = expenseService.addExpense(1, request);

        assertEquals("GroupNotFoundError", result.getDescription());
        verify(userRepository, times(1)).findById(1);
        verify(groupRepository, times(1)).findById(1);
    }

    @Test
    void testAddExpense_PayerNotInGroup() {
        User user = new User();
        Group group = new Group();
        group.setUsers(new HashSet<>());

        CreateExpenseRequest request = new CreateExpenseRequest();
        request.setGroupId(1);

        when(userRepository.findById(anyInt())).thenReturn(Optional.of(user));
        when(groupRepository.findById(anyInt())).thenReturn(Optional.of(group));

        Expense result = expenseService.addExpense(1, request);

        assertEquals("PayerNotInGroupError", result.getDescription());
        verify(userRepository, times(1)).findById(1);
        verify(groupRepository, times(1)).findById(1);
    }

    @Test
    void testAddExpense_Success() {
        User user = new User();
        Group group = new Group();
        group.setUsers(Set.of(user));

        CreateExpenseRequest request = new CreateExpenseRequest();
        request.setGroupId(1);
        request.setUserShares(new ArrayList<>());

        when(userRepository.findById(anyInt())).thenReturn(Optional.of(user));
        when(groupRepository.findById(anyInt())).thenReturn(Optional.of(group));

        Expense result = expenseService.addExpense(1, request);

        assertNotNull(result);
        verify(expenseRepository, times(1)).save(any(Expense.class));
        verify(userShareRepository, times(request.getUserShares().size())).save(any(UserShare.class));
        verify(balanceService, times(request.getUserShares().size())).updateBalance(anyInt(), anyInt(), anyDouble());
    }

    @Test
    void testGetExpensesByGroupId() {
        List<Expense> expenses = new ArrayList<>();
        Expense expense = new Expense();
        expense.setPayerId(1);
        expenses.add(expense);

        when(expenseRepository.findByGroupId(anyInt())).thenReturn(expenses);
        when(userRepository.findById(anyInt())).thenReturn(Optional.of(new User()));

        List<Expense> result = expenseService.getExpensesByGroupId(1);

        assertEquals(1, result.size());
        verify(expenseRepository, times(1)).findByGroupId(1);
        verify(userRepository, times(1)).findById(1);
    }

    @Test
    void testGetTotalExpensesByGroupId() {
        List<Expense> expenses = new ArrayList<>();
        Expense expense1 = new Expense();
        expense1.setAmount(100.0);
        Expense expense2 = new Expense();
        expense2.setAmount(200.0);
        expenses.add(expense1);
        expenses.add(expense2);

        when(expenseRepository.findByGroupId(anyInt())).thenReturn(expenses);

        double result = expenseService.getTotalExpensesByGroupId(1);

        assertEquals(300.0, result, 0.001);
        verify(expenseRepository, times(1)).findByGroupId(1);
    }
}
