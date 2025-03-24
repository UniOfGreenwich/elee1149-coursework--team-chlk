package com.fairshare.controllers;

import com.fairshare.Requests.CreateExpenseRequest;
import com.fairshare.Requests.CreateExpenseResponse;
import com.fairshare.Requests.CreateGroupRequest;
import com.fairshare.Requests.CreateGroupResponse;
import com.fairshare.entity.Expense;

import com.fairshare.entity.Group;
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
    public CreateExpenseResponse addExpense(@RequestBody CreateExpenseRequest request){
            Expense createdExpense = expenseService.addExpense(request);
            if (createdExpense == null) {
                return (new CreateExpenseResponse("User not found", false, null));
            } else if (createdExpense.getExpenseName() != null && createdExpense.getExpenseName().equals("ExpenseExistsError")) {
                return (new CreateExpenseResponse("An expense with this name already exists", false, null));
            } else {
                return (new CreateExpenseResponse("New expense created!", true, createdExpense.getExpenseId()));
            }
    }
    @GetMapping("/all-expenses")
    public List<Expense> getAllExpenses(@RequestParam Integer groupId) {
        return expenseService.getExpensesByGroupId(groupId);
    }
}