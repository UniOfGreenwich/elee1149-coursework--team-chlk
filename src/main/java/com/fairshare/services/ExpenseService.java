package com.fairshare.services;

import com.fairshare.entity.Expense;
import com.fairshare.entity.UserShare;
import com.fairshare.repository.ExpenseRepository;
import com.fairshare.repository.UserShareRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class ExpenseService {

    @Autowired
    private ExpenseRepository expenseRepository;

    @Autowired
    private UserShareRepository userShareRepository;

    @Autowired
    private BalanceService balanceService;

    @Transactional
    public void addExpense(Expense expense, String payerId) {
        // Save the expense from the Payer
        expenseRepository.save(expense);

        //Update the balances of other users
        for (UserShare userShare : expense.getUserShares()) {
            userShare.setExpenseId(expense.getExpenseId());
            userShareRepository.save(userShare);
            balanceService.updateBalance(payerId, userShare.getUserId(), userShare.getShareAmount());

        }


    }
}
