package com.fairshare.Responses;

import java.util.Objects;

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CreateGroupResponse that = (CreateGroupResponse) o;
        return success == that.success &&
                Objects.equals(message, that.message) &&
                Objects.equals(groupId, that.groupId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(message, success, groupId);
    }

}

