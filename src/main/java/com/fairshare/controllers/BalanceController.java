package com.fairshare.controllers;

import com.fairshare.BalanceService;
import com.fairshare.repository.BalanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/balances")
public class BalanceController {

    @Autowired
    private BalanceService balanceService;

    @PostMapping("/update")
    public void updateBalance(@RequestParam String payerId, @RequestParam String payeeId, @RequestParam double amount) {
        balanceService.updateBalance(payerId, payeeId, amount);
    }

//    @GetMapping("/net")
//    public Double getNetBalance(@RequestParam String user1, @RequestParam String user2){
//        return balanceService.getNetBalance(user1, user2);
//    }

    @GetMapping("/{user1}/{user2}")
    public Double getNetBalance(@PathVariable String user1, @PathVariable String user2) {
        return balanceService.getNetBalance(user1, user2);
    }
}
