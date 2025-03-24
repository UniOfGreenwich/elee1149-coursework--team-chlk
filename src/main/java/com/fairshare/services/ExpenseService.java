package com.fairshare.services;

import com.fairshare.Requests.CreateExpenseRequest;
import com.fairshare.entity.Expense;
import com.fairshare.entity.User;
import com.fairshare.entity.UserShare;
import com.fairshare.repository.ExpenseRepository;
import com.fairshare.repository.UserRepository;
import com.fairshare.repository.UserShareRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExpenseService {

    @Autowired
    private ExpenseRepository expenseRepository;

    @Autowired
    private UserShareRepository userShareRepository;

    @Autowired
    private BalanceService balanceService;

    @Autowired
    private UserRepository userRepository;

    @Transactional
    public Expense addExpense(CreateExpenseRequest createExpenseRequest) {
        String expenseName = createExpenseRequest.getExpenseName();
        Integer payerId = createExpenseRequest.getPayerId();
        Integer categoryId = createExpenseRequest.getCategoryId();
        Integer expenseId = createExpenseRequest.getExpenseId();

        User user = userRepository.findById(payerId)
                .orElse(null);

        if (user == null) {
            return null; //indicates payer/user not found
        }

        if (expenseRepository.existsByExpenseName(expenseName) || expenseRepository.existsByExpenseId(expenseId)) {
            Expense errorExpense = new Expense();
            errorExpense.setExpenseName("ExpenseExistsError");
            return errorExpense; // Indicate Expense exists
        }

        Expense newExpense = new Expense();
        newExpense.setExpenseName(expenseName);
        newExpense.setPayerId(payerId);
        newExpense.setCategoryId(categoryId);
        newExpense.setExpenseId(expenseId);

        for (UserShare userShare : newExpense.getUserShares()) {
            userShare.setExpenseId(newExpense);
            userShareRepository.save(userShare);
            balanceService.updateBalance(payerId, userShare.getUserId(), userShare.getShareAmount()); // Access userId through User object
        }

        return newExpense; // Return the saved expense
    }

    public List<Expense> getExpensesByGroupId(Integer groupId) {
        List<Expense> expenses = expenseRepository.findByGroupId(groupId);
        for (Expense expense : expenses) {
            User user = userRepository.findById(expense.getUserId()).orElse(new User());
            expense.setUserName(user.getFirstName());
        }
        return expenses;
    }

    public double getTotalExpensesByGroupId(Integer groupId) {
        List<Expense> expenses = expenseRepository.findByGroupId(groupId);
        double total = 0;
        for (Expense expense : expenses) {
            total += expense.getAmount();
        }
        return total;

    }
}


