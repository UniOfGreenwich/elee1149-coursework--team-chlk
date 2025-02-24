//package com.fairshare.controllers;
//
//import com.fairshare.DTO.RecentExpensesDTO;
//import com.fairshare.entity.Expense;
//import com.fairshare.entity.UserExpense;
//import com.fairshare.services.ExpenseService;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@CrossOrigin(origins = "http://localhost:3000")
//@RequestMapping("/expense")
//public class ExpenseController {
//
//    private final ExpenseService expenseService;
//
//    public ExpenseController(ExpenseService expenseService) {
//        this.expenseService = expenseService;
//    }
//
//    @PostMapping("/add-expense")
//    public void addExpense(@RequestBody Expense expense, @RequestParam Integer payerId, @RequestBody List<UserExpense> userExpenses) {
//        expenseService.addExpense(expense, payerId, userExpenses);
//
//    }
//    @GetMapping("/recent-expenses")
//    public List<RecentExpensesDTO> getRecentExpenses(@RequestParam Integer userId, @RequestParam(defaultValue = "5") int limit) { // Optional limit parameter
//        return expenseService.getRecentExpenses(userId, limit);
//
//    }
//}