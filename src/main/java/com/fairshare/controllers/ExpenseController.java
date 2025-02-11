package com.fairshare.controllers;


import com.fairshare.entity.Expense;
import com.fairshare.services.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/expense")
public class ExpenseController {


    @Autowired
    private ExpenseService expenseService;

    @PostMapping("/add-expense")
    public void addExpense(@RequestBody Expense expense, @RequestParam String payerId) {
        expenseService.addExpense(expense, payerId);

    }


}
