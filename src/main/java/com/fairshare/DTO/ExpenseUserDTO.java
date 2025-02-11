package com.fairshare.DTO;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;

public class ExpenseUserDTO {

    @NotNull(message = "User ID is required")
    private Integer userId;

    @PositiveOrZero(message = "Amount owed must be non-negative")
    private double amountOwed;

    // Getters and setters for all fields

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public double getAmountOwed() {
        return amountOwed;
    }

    public void setAmountOwed(double amountOwed) {
        this.amountOwed = amountOwed;
    }
}