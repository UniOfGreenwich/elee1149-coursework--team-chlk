package com.fairshare.Requests;

import java.util.List;

public class UserGroupsResponse {
    private List<GroupResponse> groups;

    public UserGroupsResponse(List<GroupResponse> groups) {
        this.groups = groups;
    }

    public List<GroupResponse> getGroups() {
        return groups;
    }

    public void setGroups(List<GroupResponse> groups) {
        this.groups = groups;
    }
}
