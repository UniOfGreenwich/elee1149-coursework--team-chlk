//package com.fairshare.services;
//
//import com.fairshare.entity.Expense;
//import com.fairshare.repository.ExpenseRepository;
//import org.junit.jupiter.api.Test;
//import org.junit.jupiter.api.extension.ExtendWith;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.Mockito;
//import org.mockito.junit.jupiter.MockitoExtension;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.test.context.bean.override.mockito.MockitoBean;
//
//import java.util.Collections;
//import java.util.Date;
//import java.util.List;
//
//import static org.junit.jupiter.api.Assertions.assertEquals;
//import static org.mockito.ArgumentMatchers.any;
//import static org.mockito.ArgumentMatchers.anyInt;
//import static org.mockito.Mockito.verify;
//
//@ExtendWith(MockitoExtension.class)
// class ExpenseServiceTest {
//
//    @InjectMocks
//    ExpenseService expenseService;
//
//    @Mock
//    ExpenseRepository expenseRepository;
//
//    @Test
//    void testAddExpense() {
//         Expense expense = new Expense();
//         expense.setDescription("Test Expense");
//         expense.setAmount(100.0);
//         expense.setCurrency("GBP");
//         expense.setDate(new Date());
//         expense.setCategoryId(1);
//         expense.setGroupId(1);
//         expense.setUserId(1);
//
//         Mockito.when(expenseRepository.save(any(Expense.class))).thenReturn(expense);
//
//         expenseService.addExpense(expense, 1);
//
//         verify(expenseRepository, Mockito.times(1)).save(expense);
//    }
//
//    @Test
//    void testGetExpensesByGroupId() {
//        Expense expense = new Expense();
//        expense.setDescription("Test Expense");
//        expense.setAmount(100.0);
//        expense.setCurrency("GBP");
//        expense.setDate(new Date());
//        expense.setCategoryId(1);
//        expense.setGroupId(1);
//        expense.setUserId(1);
//
//        Mockito.when(expenseRepository.findByGroupId(anyInt())).thenReturn(Collections.singletonList(expense));
//
//        List<Expense> expenses = expenseService.getExpensesByGroupId(1);
//
//        assertEquals(1, expenses.size());
//        assertEquals("Test Expense", expenses.get(0).getDescription());
//        Mockito.verify(expenseRepository, Mockito.times(1)).findByGroupId(1);
//    }
//}
