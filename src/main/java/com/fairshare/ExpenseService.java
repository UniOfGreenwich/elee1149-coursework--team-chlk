package com.fairshare;

import com.fairshare.DTO.CreateExpenseRequest;
import com.fairshare.DTO.ExpenseUserDTO;
import com.fairshare.entity.Expense;
import com.fairshare.repository.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
public class ExpenseService {

    private final ExpenseRepository expenseRepository;
    private final BalanceService balanceService;

    @Autowired
    public ExpenseService(ExpenseRepository expenseRepository, BalanceService balanceService) {
        this.expenseRepository = expenseRepository;
        this.balanceService = balanceService;
    }

    @Transactional  // Ensures expense creation and balance updates happen in a single transaction
    public Expense createExpense(CreateExpenseRequest request) {
        // 1. Create Expense entity
        Expense expense = new Expense();
        expense.setDescription(request.getDescription());
        expense.setAmount(request.getAmount());
        expense.setPayerId(request.getPayerId());
        expense.setGroupId(request.getGroupId());

        // 2. Save the Expense
        Expense savedExpense = expenseRepository.save(expense);

        // 3. Update balances for each participant
        for (ExpenseUserDTO participant : request.getParticipants()) {
            balanceService.updateBalance(request.getPayerId(), participant.getUserId(), participant.getAmountOwed(), savedExpense.getId());
        }

        return savedExpense;
    }

}



