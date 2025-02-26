package com.fairshare.controllers;

import com.fairshare.entity.Expense;

import com.fairshare.services.ExpenseService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/expense")
public class ExpenseController {

    private final ExpenseService expenseService;

    public ExpenseController(ExpenseService expenseService) {
        this.expenseService = expenseService;
    }

    @PostMapping("/add-expense")
    public void addExpense(@RequestBody Expense expense, @RequestParam Integer payerId) {
        if (expense.getCategoryId() == null) {
            expense.setCategoryId(1); //set as deafult category
        }
        expenseService.addExpense(expense, payerId);

    }
    @GetMapping("/all-expenses")
    public List<Expense> getAllExpenses() {
        return expenseService.getAllExpenses();
    }
}