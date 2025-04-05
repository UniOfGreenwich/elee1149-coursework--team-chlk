package com.fairshare.Responses;

public class LoginResponse {
    private String message;
    private Boolean success;
    private Integer userId;
    private String firstName;
    private String lastName;

    public LoginResponse(String message, Boolean success, Integer userId, String firstName, String lastName) {
        this.message = message;
        this.success = success;
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
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

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
}

