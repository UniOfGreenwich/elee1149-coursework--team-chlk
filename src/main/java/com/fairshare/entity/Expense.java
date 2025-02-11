package com.fairshare.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.criteria.CriteriaBuilder;

@Entity
@Table(name = "expense") //
public class Expense {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)  // Description is required
    private String description;

    @Column(nullable = false)  // Amount is required
    private double amount;

    @Column(name = "payer_id", nullable = false) // Payer ID is required
    private Integer payerId;

    @Column(name = "group_id", nullable = false) // Group ID is required
    private Integer groupId;

    @Column(name = "currency", nullable = false) // currency is required
    private String currency;

    @Column(name = "category_id", nullable = false) // category ID is required
    private Integer categoryId;


    // Getters and setters for all fields

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public void setPayerId(Integer payerId) {
        this.payerId = payerId;
    }


    public void setGroupId(Integer groupId) {

    }

}
