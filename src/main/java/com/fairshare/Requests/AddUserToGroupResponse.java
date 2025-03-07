package com.fairshare.Requests;

public class AddUserToGroupResponse {
    private String message;
    private Boolean success;
    private Integer userId;

    public AddUserToGroupResponse(String message, Boolean success, Integer userId) {
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

    public Integer getGroupId() {
        return userId;
    }
    public void setGroupId(Integer groupId) {
        this.userId = groupId;
    }
}

