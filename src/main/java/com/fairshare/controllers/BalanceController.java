package com.fairshare.controllers;

import com.fairshare.services.BalanceService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/balances")
public class BalanceController {

    private final BalanceService balanceService;

    public BalanceController(BalanceService balanceService) {
        this.balanceService = balanceService;
    }

    @PostMapping("/update")
    public void updateBalance(@RequestParam Integer payerId, @RequestParam Integer payeeId, @RequestParam double amount) {
        balanceService.updateBalance(payerId, payeeId, amount);
    }

    @GetMapping("/{user1}/{user2}")
    public Double getNetBalance(@PathVariable Integer user1, @PathVariable Integer user2) {
        return balanceService.getNetBalance(user1, user2);
    }
}
