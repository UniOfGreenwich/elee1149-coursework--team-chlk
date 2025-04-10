package com.fairshare.DTO;

import com.fairshare.entity.User;

public class UserWithBalance extends User {
    private Double balance;

    public UserWithBalance(User user, Double balance) {
        super (user.getUserId(), user.getFirstName(), user.getLastName(), user.getEmail(), user.getUsername(), user.getPasswordHash(), user.getPassword());
        this.balance = balance;
    }

    public UserWithBalance() {

    }

    public Double getBalance() {
        return balance;
    }

    public void setBalance(Double balance) {
        this.balance = balance;
    }
}
