package com.fairshare.Requests;

import com.fairshare.entity.UserShare;
import java.util.Date;
import java.util.List;

public class CreateExpenseRequest {

    //private String expenseName;
    private Integer expenseId;
    private String description;
    private Double amount;
    private String currency;
    //private Integer payerId;
    private Integer categoryId;
    private Integer groupId;
    private List<UserShare> userShares;
    private Date date;


    public Integer getExpenseId() {
        return expenseId;
    }

    public void setExpenseId(Integer expenseId) {
        this.expenseId = expenseId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public Integer getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Integer categoryId) {
        this.categoryId = categoryId;
    }

    public Date getDate() {
      return date;
    }

    public void setDate(Date date) {
       this.date = date;
    }

    public Integer getGroupId() {
        return groupId;
    }

    public void setGroupId(Integer groupId) {
        this.groupId = groupId;
    }

    public List<UserShare> getUserShares() {
        return userShares;
    }

    public void setUserShares(List<UserShare> userShares) {
        this.userShares = userShares;
    }
}




