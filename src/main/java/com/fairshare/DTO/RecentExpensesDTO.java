package com.fairshare.DTO;

public class RecentExpensesDTO {
    private String expenseName;
    private String category;
    private String date;
    private Double userPaid;
    private Double userLent;
    private String payerName;

    public RecentExpensesDTO(String expenseName, String category, String date, Double userPaid, Double userLent, String payerName) {
        this.expenseName = expenseName;
        this.category = category;
        this.date = date;
        this.userPaid = userPaid;
        this.userLent = userLent;
        this.payerName = payerName;
    }

    // Getters and Setters
    public String getExpenseName() {
        return expenseName;
    }

    public void setExpenseName(String expenseName) {
        this.expenseName = expenseName;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Double getUserPaid() {
        return userPaid;
    }

    public void setUserPaid(Double userPaid) {
        this.userPaid = userPaid;
    }

    public Double getUserLent() {
        return userLent;
    }

    public void setUserLent(Double userLent) {
        this.userLent = userLent;
    }

    public String getPayerName() {
        return payerName;
    }

    public void setPayerName(String payerName) {
        this.payerName = payerName;
    }
}
