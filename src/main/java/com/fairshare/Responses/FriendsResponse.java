package com.fairshare.Responses;

import com.fairshare.DTO.UserWithBalance;

public class FriendsResponse {
    private String message;
    private boolean success;
    private UserWithBalance userWithBalance;

    public FriendsResponse(String message, boolean success) {
        this.message = message;
        this.success = success;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public UserWithBalance getUserWithBalance() {
        return userWithBalance;
    }

    public void setUserWithBalance(UserWithBalance userWithBalance) {
        this.userWithBalance = userWithBalance;
    }
}
