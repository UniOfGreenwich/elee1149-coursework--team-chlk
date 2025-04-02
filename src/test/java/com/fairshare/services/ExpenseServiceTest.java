package com.fairshare.services;

import com.fairshare.Requests.CreateExpenseRequest;
import com.fairshare.entity.Expense;
import com.fairshare.entity.User;
import com.fairshare.repository.ExpenseRepository;
import com.fairshare.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class ExpenseServiceTest {

    @InjectMocks
    ExpenseService expenseService;

    @Mock
    ExpenseRepository expenseRepository;

    @Mock
    UserRepository userRepository;

    @Test
    void testAddExpense() {
        // Create a CreateExpenseRequest object
        CreateExpenseRequest request = new CreateExpenseRequest();
        request.setExpenseName("Test Expense");
        request.setAmount(100.0);
        request.setCurrency("GBP");
        //request.setDate(new Date());
        request.setCategoryId(1);
        request.setGroupId(1);
        request.setPayerId(1);

        User payer = new User();
        payer.setUserId(1);
        // Mock the userRepository to return a user when findById is called
        when(userRepository.findById(1)).thenReturn(Optional.of(payer));

        // Create the expected Expense object
        Expense expectedExpense = new Expense();
        expectedExpense.setExpenseName("Test Expense");
        expectedExpense.setAmount(100.0);
        expectedExpense.setCurrency("GBP");
       // expectedExpense.setDate(new Date());
        expectedExpense.setCategoryId(1);
        expectedExpense.setGroupId(1);
        expectedExpense.setPayerId(payer.getUserId()); // Set the payer object

        // Mocks the expenseRepository's 'save' method
        when(expenseRepository.save(any(Expense.class))).thenReturn(expectedExpense);

        // Calls the addExpense method with the request object
        Expense actualExpense = expenseService.addExpense(request);

        // Assertions
        assertEquals(expectedExpense, actualExpense);
        verify(expenseRepository, Mockito.times(1)).save(any(Expense.class));

    }

    @Test
    void testGetExpensesByGroupId() {
        Expense expense = new Expense();
        expense.setDescription("Test Expense");
        expense.setAmount(100.0);
        expense.setCurrency("GBP");
        //expense.setDate(new Date());
        expense.setCategoryId(1);
        expense.setGroupId(1);
        expense.setPayerId(1);

        when(expenseRepository.findByGroupId(anyInt())).thenReturn(Collections.singletonList(expense));
        when(userRepository.findById(anyInt())).thenReturn(Optional.of(new User())); // Mock userRepository

        List<Expense> expenses = expenseService.getExpensesByGroupId(1);

        assertEquals(1, expenses.size());
        assertEquals("Test Expense", expenses.get(0).getDescription());
        verify(expenseRepository, Mockito.times(1)).findByGroupId(1);
    }
}
