package com.fairshare.services;

import com.fairshare.entity.Expense;
import com.fairshare.entity.User;
import com.fairshare.entity.UserShare;
import com.fairshare.repository.ExpenseRepository;
import com.fairshare.repository.UserRepository;
import com.fairshare.repository.UserShareRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

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
    public void addExpense(Expense expense, Integer payerId) {
        // Save the expense from the Payer
        expenseRepository.save(expense);

        //Update the balances of other users
        for (UserShare userShare : expense.getUserShares()) {
            userShare.setExpenseId(expense.getExpenseId());
            userShareRepository.save(userShare);
            balanceService.updateBalance(payerId, userShare.getUserId(), userShare.getShareAmount());

        }
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