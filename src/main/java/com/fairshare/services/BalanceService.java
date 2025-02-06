package com.fairshare.services;

import com.fairshare.entity.Balance;
import com.fairshare.repository.BalanceRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BalanceService {

    @Autowired
    private BalanceRepository balanceRepository;

    @Transactional
    public void updateBalance(String payerId, String payeeId, double amount) {
        Balance balance = balanceRepository.findByUsers(payerId, payeeId);

        if (balance == null) {
            balance = new Balance();
            balance.setUser1Id(payerId);
            balance.setUser2Id(payeeId);
            balance.setNetAmount(amount);
        } else {
            if (balance.getUser1Id().equals(payerId)) {
                balance.setNetAmount(balance.getNetAmount() + amount);
            } else {
                balance.setNetAmount(balance.getNetAmount() - amount);
            }
        }

        balanceRepository.save(balance);

    }

    public Double getNetBalance(String user1, String user2) {
        Balance balance = balanceRepository.findByUsers(user1, user2);
        if (balance != null) {
            if (balance.getUser1Id().equals(user1)) {
                return balance.getNetAmount();
            } else {
                return -balance.getNetAmount();
            }
        }
        return 0.0;
    }
}




