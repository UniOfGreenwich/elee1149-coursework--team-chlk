package com.fairshare.services;

import com.fairshare.DTO.RecentExpensesDTO;
import com.fairshare.entity.Expense;
import com.fairshare.entity.UserExpense;
import com.fairshare.entity.User;
import com.fairshare.repository.ExpenseRepository;
import com.fairshare.repository.UserExpenseRepository;
import com.fairshare.repository.UserRepository;
import com.fairshare.repository.CategoryRepository;
import jakarta.transaction.Transactional;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.format.DateTimeFormatter;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class ExpenseService {

    private final ExpenseRepository expenseRepository;

    private final UserExpenseRepository userExpenseRepository;

    private final BalanceService balanceService;

    private final UserRepository userRepository;

    private final CategoryRepository categoryRepository;

    public ExpenseService(ExpenseRepository expenseRepository, UserExpenseRepository userExpenseRepository, BalanceService balanceService, UserRepository userRepository, CategoryRepository categoryRepository) {
        this.expenseRepository = expenseRepository;
        this.userExpenseRepository = userExpenseRepository;
        this.balanceService = balanceService;
        this.userRepository = userRepository;
        this.categoryRepository = categoryRepository;
    }

    @Transactional
    public void addExpense(Expense expense, Integer payerId, List<UserExpense> userExpenses) {
        expenseRepository.save(expense);

        for (UserExpense userExpense : userExpenses) {
            userExpenseRepository.save(userExpense);
            Integer payeeId = Integer.valueOf(userExpense.getId().getUserId()); // Get payeeId from composite key
            double shareAmount = userExpense.getShareAmount();// Get shareAmount

            if (!payerId.equals(payeeId)) { // Avoids updating balances with the user itself
                balanceService.updateBalance(payerId, payeeId, shareAmount);
            }
        }
    }

    public List<RecentExpensesDTO> getRecentExpenses(Integer userId, int limit) {
        List<RecentExpensesDTO> recentExpenses = new ArrayList<>();

        // Create a Pageable object for sorting and limiting results
        Pageable pageable = PageRequest.of(0, limit, Sort.by("date").descending()); // Sort by date descending

        // Fetch recent expenses using the Pageable
        List<Expense> expenses = expenseRepository.findRecentExpensesByUserId(userId, pageable);


        for (Expense expense : expenses) {
            RecentExpensesDTO dto = new RecentExpensesDTO();
            dto.setExpenseName(expense.getDescription());

            // 1. Get Category Name correctly
            Integer categoryId = expense.getCategoryId();
            String categoryName = categoryRepository.findCategoryNameById(categoryId);
            dto.setCategory(categoryName);

            // Correct date formatting
            LocalDate date = expense.getDate();
            if (date != null) {  // Handle potential null dates
                dto.setDate(date.format(DateTimeFormatter.ofPattern("dd MMM yyyy")));
            }

            UserExpense userExpense = userExpenseRepository.findByExpenseIdAndUserId(expense.getExpenseId(), userId);
            if (userExpense != null) { //
                double shareAmount = userExpense.getShareAmount();

                if (userId.equals(expense.getPayerId())) { // Comparing using userId
                    dto.setUserPaid(expense.getAmount());
                    dto.setUserLent(expense.getAmount() - shareAmount);
                    dto.setPayerName("You"); //
                } else {
                    dto.setUserPaid(shareAmount);
                    dto.setUserLent(0.0);
                    Integer payerId = expense.getPayerId();
                    User payer = userRepository.findById(payerId).orElse(null);
                    if (payer != null && payer.getFirstName() != null) { // Null checks
                        dto.setPayerName(payer.getFirstName());
                    } else {
                        dto.setPayerName("Unknown");
                    }
                }
            } else {
                // Handles the case where userExpense is null (no share information found)
                // This might indicate an error or missing data.
                System.err.println("Warning: No UserExpense found for expense: " + expense.getExpenseId() + " and user: " + userId);
                continue; // Skip to the next expense
            }

            recentExpenses.add(dto);
        }

        return recentExpenses;
    }
}
