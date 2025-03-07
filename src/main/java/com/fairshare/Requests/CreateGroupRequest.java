package com.fairshare.Requests;

public class CreateGroupRequest {
    private String groupName;
    private Integer groupId;
    private Integer adminId;

    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    public Integer getAdminId() { return adminId;}

    public void setAdminId(Integer userId) {this.adminId = userId;}

    public Integer getGroupId() {
        return groupId;
    }

    public void setGroupId(Integer groupId) {
        this.groupId = groupId;
    }
}
