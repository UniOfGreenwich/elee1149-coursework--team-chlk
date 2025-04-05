package com.fairshare.controllers;

import com.fairshare.entity.Expense;
import com.fairshare.services.ExpenseService;
import org.junit.jupiter.api.Test;

import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.text.SimpleDateFormat;
import java.util.Collections;
import java.util.Date;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(ExpenseController.class)
class ExpenseControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private ExpenseService expenseService;

    private static final SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSXXX");

    @Test
    void testAddExpense() throws Exception {
        Expense expense = new Expense();
        expense.setDescription("Test Expense");
        expense.setAmount(100.0);
        expense.setCurrency("GBP");
        expense.setDate(dateFormat.parse("2025-03-03T00:00:00.000+00:00"));
        expense.setCategoryId(1);
        expense.setGroupId(1);
        expense.setPayerId(1);

        mockMvc.perform(MockMvcRequestBuilders.post("/expense/add-expense")
                        .contentType("application/json")
                        .content("{\"description\":\"Test Expense\",\"amount\":100.0,\"currency\":\"GBP\",\"date\":\"2025-03-03T00:00:00.000+00:00\",\"categoryId\":1,\"groupId\":1,\"payerId\":1}")
                        .param("payerId", "1"))
                        .andExpect(status().isOk());

    }
    @Test
    public void testGetAllExpenses() throws Exception {
        Expense expense = new Expense();
        expense.setDescription("Test Expense");
        expense.setAmount(100.0);
        expense.setCurrency("GBP");
        expense.setDate(dateFormat.parse("2025-03-03T00:00:00.000+00:00"));
        expense.setCategoryId(1);
        expense.setGroupId(1);
        expense.setPayerId(1);

        Mockito.when(expenseService.getExpensesByGroupId(1)).thenReturn(Collections.singletonList(expense));

        mockMvc.perform(MockMvcRequestBuilders.get("/expense/all-expenses")
                        .param("groupId", "1"))
                .andExpect(status().isOk())
                .andExpect(content().json("[{\"description\":\"Test Expense\",\"amount\":100.0,\"currency\":\"GBP\",\"date\":\"2025-03-03T00:00:00.000+00:00\",\"categoryId\":1,\"groupId\":1,\"payerId\":1}]"));
    }
}
