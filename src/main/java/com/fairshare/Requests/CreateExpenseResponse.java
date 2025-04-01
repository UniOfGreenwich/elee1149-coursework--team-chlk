package com.fairshare.Requests;

public class CreateExpenseResponse {
        private String message;
        private Boolean success;
        private Integer expenseId;

        public CreateExpenseResponse(String message, Boolean success, Integer expenseId) {
            this.message = message;
            this.success = success;
            this.expenseId = expenseId;
        }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Boolean getSuccess() {
        return success;
    }

    public void setSuccess(Boolean success) {
        this.success = success;
    }

    public Integer getExpenseId() {
        return expenseId;
    }

    public void setExpenseId(Integer expenseId) {
        this.expenseId = expenseId;
    }
}

