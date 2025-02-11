package com.fairshare.DTO;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import java.util.List;
import com.fairshare.DTO.ExpenseUserDTO;


public class CreateExpenseRequest {

    @NotBlank(message = "Description cannot be empty")
    private String description;

    @Positive(message = "Amount must be positive")
    private double amount;

    @NotNull(message = "Payer ID is required")
    private Integer payerId;

    @NotNull(message = "Group ID is required")
    private Integer groupId;

    @NotNull(message = "Participants are required")
    @Valid
    private List<ExpenseUserDTO> participants;

    // Getters and setters for all fields

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public Integer getPayerId() {
        return payerId;
    }

    public void setPayerId(Integer payerId) {
        this.payerId = payerId;
    }

    public List<ExpenseUserDTO> getParticipants() {
        return participants;
    }

    public void setParticipants(List<ExpenseUserDTO> participants) {
        this.participants = participants;
    }

    public Integer getGroupId() {
        return groupId;
    }

    public void setGroupId(Integer groupId) {
        this.groupId = groupId;
    }
}


