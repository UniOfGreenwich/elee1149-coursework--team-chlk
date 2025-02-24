package com.fairshare.entity;

import java.io.Serializable;
import java.util.Objects; // Import Objects for hashCode()

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable
public class UserExpenseCompositeKey implements Serializable {

    private static final long serialVersionUID = 1L;

    @Column(name = "user_id")
    private Integer userId; //

    @Column(name = "expense_id")
    private Integer expenseId; //

    // Constructors
    public UserExpenseCompositeKey() {} // No-arg constructor

    public UserExpenseCompositeKey(Integer userId, Integer expenseId) {
        this.userId = userId;
        this.expenseId = expenseId;
    }

    // Getters and Setters
    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getExpenseId() {
        return expenseId;
    }

    public void setExpenseId(Integer expenseId) {
        this.expenseId = expenseId;
    }

    // equals() and hashCode() - for composite key functionality on ExpenseUser junction table
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserExpenseCompositeKey that = (UserExpenseCompositeKey) o; // Correct casting
        return Objects.equals(userId, that.userId) && Objects.equals(expenseId, that.expenseId); // Use Objects.equals for null safety
    }

    @Override
    public int hashCode() {
        return Objects.hash(userId, expenseId);
    }
}
