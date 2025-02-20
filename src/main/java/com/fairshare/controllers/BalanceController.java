package com.fairshare.controllers;

import com.fairshare.services.BalanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<String> updateBalance(@RequestParam String payerId, @RequestParam String payeeId, @RequestParam double amount) {
        balanceService.updateBalance(payerId, payeeId, amount);
        return ResponseEntity.status(HttpStatus.OK).body("Balance updated successfully");
    }

    @GetMapping("/{user1}/{user2}")
    public ResponseEntity<Object> getNetBalance(@PathVariable String user1, @PathVariable String user2) {
        Double netBalance =  balanceService.getNetBalance(user1, user2);
        if (netBalance != null) {
            return ResponseEntity.status(HttpStatus.OK).body("Users net balance: " + netBalance);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Balance not found between users");
        }
    }
}
