package com.fairshare.controllers;
import com.fairshare.Requests.CreateExpenseRequest;
import com.fairshare.Responses.CreateExpenseResponse;
import com.fairshare.entity.Expense;
import com.fairshare.services.ExpenseService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "https://uniofgreenwich.github.io"})

@RequestMapping("/expense")
public class ExpenseController {

    private final ExpenseService expenseService;

    public ExpenseController(ExpenseService expenseService) {this.expenseService = expenseService;
    }

    @PostMapping("/add-expense")
    public CreateExpenseResponse addExpense(@RequestParam Integer payerId, @RequestBody CreateExpenseRequest request) {
        Expense createdExpense = expenseService.addExpense(payerId, request);

        if (createdExpense == null) {
            return new CreateExpenseResponse("User or group not found", false, null);
        } else if ("PayerNotInGroupError".equals(createdExpense.getDescription())) {
            return new CreateExpenseResponse("Payer is not a member of this group", false, null);
        } else if ("GroupAndUserNotFoundError".equals(createdExpense.getDescription())) {
            return new CreateExpenseResponse("Group and User not found", false, null);
        } else if ("UserNotFoundError".equals(createdExpense.getDescription())) {
            return new CreateExpenseResponse("User not found", false, null);
        } else if ("GroupNotFoundError".equals(createdExpense.getDescription())) {
            return new CreateExpenseResponse("Group not found", false, null);
        } else { // Success
            return new CreateExpenseResponse("New expense created!", true, createdExpense.getExpenseId());
        }
    }
    @GetMapping("/all-expenses")
    public List<Expense> getAllExpenses(@RequestParam Integer groupId) {
        return expenseService.getExpensesByGroupId(groupId);
    }
}