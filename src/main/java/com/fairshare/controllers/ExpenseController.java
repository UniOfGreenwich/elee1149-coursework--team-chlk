// com.fairshare.controllers.ExpenseController.java
package com.fairshare.controllers;

import com.fairshare.DTO.CreateExpenseRequest;
import com.fairshare.entity.Expense;
import com.fairshare.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/expenses") // Base path for all expense-related endpoints
public class ExpenseController {

    private final ExpenseService expenseService;

    @Autowired
    public ExpenseController(ExpenseService expenseService) {
        this.expenseService = expenseService;
    }

    @PostMapping("/create")
    public ResponseEntity<?> createExpense(@Valid @RequestBody CreateExpenseRequest request) {
        try {
            Expense createdExpense = expenseService.createExpense(request);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdExpense.getId()); // Return the ID of the created expense
        } catch (IllegalArgumentException e) { // Handle specific exceptions (e.g., invalid input)
            return ResponseEntity.badRequest().body(e.getMessage()); // Return a 400 Bad Request with the error message
        } catch (Exception e) { // Catch any other unexpected exceptions
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error creating expense"); // Return a 500 Internal Server Error
        }
    }
    }
