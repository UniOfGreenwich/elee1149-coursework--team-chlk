package com.fairshare.services;

import com.fairshare.entity.Balance;
import com.fairshare.repository.BalanceRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

@Service
public class BalanceService {

    private final BalanceRepository balanceRepository;

    public BalanceService(BalanceRepository balanceRepository) {
        this.balanceRepository = balanceRepository;
    }

    @Transactional
    public void updateBalance(Integer payerId, Integer payeeId, double amount) {
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

    public Double getNetBalance(Integer user1, Integer user2) {
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




