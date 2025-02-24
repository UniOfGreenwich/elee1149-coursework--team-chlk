package com.fairshare.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "userExpense", schema = "fairdbo")
public class UserExpense {

    @EmbeddedId // EmbeddedId to signify the composite key
    private UserExpenseCompositeKey userExpenseId;

    @ManyToOne(fetch = FetchType.LAZY) // Many UserExpenses to one Expense
    @MapsId("expenseId") // Maps the expenseId part of the composite key
    @JoinColumn(name = "expense_id") // Foreign key column in user_expense table
    private Expense expense;

    @ManyToOne(fetch = FetchType.LAZY) // Many UserExpenses to one User
    @MapsId("userId") // Maps the userId part of the composite key
    @JoinColumn(name = "user_id") // Foreign key column in user_expense table
    private User user;

    @Column(name = "share_amount")
    private Double shareAmount;

    // Getters and setters
    public UserExpenseCompositeKey getId() {
        return userExpenseId;
    }

    public void setId(UserExpenseCompositeKey id) {
        this.userExpenseId = id;
    }

    public Double getShareAmount() {
        return shareAmount;
    }

    public void setShareAmount(Double shareAmount) {
        this.shareAmount = shareAmount;
    }


}

