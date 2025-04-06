//package com.fairshare.services;
//
//import com.fairshare.Requests.CreateExpenseRequest;
//import com.fairshare.entity.Expense;
//import com.fairshare.entity.Group;
//import com.fairshare.entity.User;
//import com.fairshare.entity.UserShare;
//import com.fairshare.repository.ExpenseRepository;
//import com.fairshare.repository.GroupRepository;
//import com.fairshare.repository.UserRepository;
//import com.fairshare.repository.UserShareRepository;
//import org.junit.jupiter.api.Test;
//import org.junit.jupiter.api.extension.ExtendWith;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.Mockito;
//import org.mockito.junit.jupiter.MockitoExtension;
//
//import java.util.Collections;
//import java.util.Date;
//import java.util.List;
//import java.util.Optional;
//
//import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
//import static org.junit.jupiter.api.Assertions.assertEquals;
//import static org.mockito.ArgumentMatchers.any;
//import static org.mockito.ArgumentMatchers.anyDouble;
//import static org.mockito.ArgumentMatchers.anyInt;
//import static org.mockito.ArgumentMatchers.anyString;
//import static org.mockito.Mockito.times;
//import static org.mockito.Mockito.verify;
//import static org.mockito.Mockito.when;
//
//@ExtendWith(MockitoExtension.class)
//class ExpenseServiceTest {
//
//    @InjectMocks
//    ExpenseService expenseService;
//
//    @Mock
//    ExpenseRepository expenseRepository;
//
//    @Mock
//    UserShareRepository userShareRepository;
//
//    @Mock
//    UserRepository userRepository;
//
//    @Mock
//    GroupRepository groupRepository;
//
//    @Mock
//    BalanceService balanceService;
//
//    @Test
//    void testAddExpense() {
//        CreateExpenseRequest request = new CreateExpenseRequest();
//        request.setExpenseName("Test Expense");
//        request.setExpenseId(1);
//        request.setDescription("Test Description");
//        request.setAmount(100.0);
//        request.setCurrency("USD");
//        request.setPayerId(1);
//        request.setCategoryId(1);
//        request.setGroupId(1);
//
//        User user = new User();
//        user.setUserId(1);
//
//        Group group = new Group();
//        group.setGroupId(1);
//        group.setUsers(Collections.singleton(user));
//
//        when(groupRepository.findById(anyInt())).thenReturn(Optional.of(group));
//        when(userRepository.findById(anyInt())).thenReturn(Optional.of(user));
//        when(expenseRepository.existsByExpenseNameAndGroupId(anyString(), anyInt())).thenReturn(false);
//        when(expenseRepository.existsByExpenseId(anyInt())).thenReturn(false);
//
//        Expense result = expenseService.addExpense(request);
//
//        assertEquals("Test Expense", result.getExpenseName());
//        assertEquals(1, result.getExpenseId());
//        assertEquals("Test Description", result.getDescription());
//        assertEquals(100.0, result.getAmount());
//        assertEquals("USD", result.getCurrency());
//        assertEquals(1, result.getPayerId());
//        assertEquals(1, result.getCategoryId());
//        assertEquals(1, result.getGroupId());
//
//        verify(expenseRepository, times(1)).save(any(Expense.class));
//        verify(userShareRepository, times(result.getUserShares().size())).save(any(UserShare.class));
//        verify(balanceService, times(result.getUserShares().size())).updateBalance(anyInt(), anyInt(), anyDouble());
//    }
//
//    @Test
//    void testGetExpensesByGroupId() {
//        Expense expense = new Expense();
//        expense.setDescription("Test Expense");
//        expense.setAmount(100.0);
//        expense.setCurrency("GBP");
//        //expense.setDate(new Date());
//        expense.setCategoryId(1);
//        expense.setGroupId(1);
//        expense.setPayerId(1);
//
//        when(expenseRepository.findByGroupId(anyInt())).thenReturn(Collections.singletonList(expense));
//        when(userRepository.findById(anyInt())).thenReturn(Optional.of(new User())); // Mock userRepository
//
//        List<Expense> expenses = expenseService.getExpensesByGroupId(1);
//
//        assertEquals(1, expenses.size());
//        assertEquals("Test Expense", expenses.get(0).getDescription());
//        verify(expenseRepository, Mockito.times(1)).findByGroupId(1);
//    }
//}
