package com.fairshare;

import com.fairshare.entity.Balance;
import com.fairshare.repository.BalanceRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service public class BalanceService {

    @Autowired
    private BalanceRepository balanceRepository;

    @Transactional
    public void updateBalance(Integer payerId, Integer payeeId, double amount, Integer ExpenseID) {

        Integer user1Id = Math.min(payerId, payeeId);
        Integer user2Id = Math.max(payerId, payeeId);

        Optional<Balance> existingBalance = balanceRepository.findByUser1IdAndUser2Id(user1Id, user2Id);

        Balance balance = existingBalance.orElseGet(Balance::new);

        if (existingBalance.isEmpty()) {
            // New balance entry
            balance.setUser1Id(user1Id);
            balance.setUser2Id(user2Id);
        }

        // Update the balance based on who is the payer and payee
        if (payerId < payeeId) {
            balance.setNetAmount(balance.getNetAmount() - amount); // Update net amount
        } else {
            balance.setNetAmount(balance.getNetAmount() + amount); // Update net amount
        }

        balanceRepository.save(balance);
    }

    public Double getNetBalance(Integer user1, Integer user2) {

        Integer user1Id = Math.min(user1, user2);
        Integer user2Id = Math.max(user1, user2);

        Optional<Balance> balance = balanceRepository.findByUser1IdAndUser2Id(user1Id, user2Id);
        return balance.map(b -> -b.getNetAmount())
                .orElse(0.0);
    }
}




