package com.fairshare.Requests;

public class CreateGroupRequest {
    private String groupName;
    private Integer groupId;
    private Integer userId;

    public CreateGroupRequest(String groupName, Integer groupId, Integer userId) {
        this.groupName = groupName;
        this.groupId = groupId;
        this.userId = userId;
    }

    public CreateGroupRequest() {
    }

    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    public Integer getGroupId() {
        return groupId;
    }

    public void setGroupId(Integer groupId) {
        this.groupId = groupId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }
}
