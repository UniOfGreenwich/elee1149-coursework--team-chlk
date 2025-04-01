package com.fairshare.Responses;

public class CreateGroupResponse {
    private String message;
    private Boolean success;
    private Integer groupId;

    public CreateGroupResponse(String message, Boolean success, Integer userId) {
        this.message = message;
        this.success = success;
        this.groupId = groupId;
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
        return groupId;
    }

    public void setGroupId(Integer groupId) {
        this.groupId = groupId;
    }
}

