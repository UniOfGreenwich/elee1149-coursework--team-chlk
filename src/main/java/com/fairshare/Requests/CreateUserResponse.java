package com.fairshare.Requests;

public class CreateUserResponse {
    private String message;
    private Boolean success;
    private Integer userId;

    public CreateUserResponse(String message, Boolean success, Integer userId) {
        this.message = message;
        this.success = success;
        this.userId = userId;
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

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }
}

