package com.fairshare.Requests;

import com.fairshare.entity.Group;

import java.util.Date;

public class GroupResponse {
    private Group group;
    private int numberOfUsers;
    private double totalSpent;

    public GroupResponse(Group group, int numberOfUsers, double totalSpent) {
        this.group = group;
        this.numberOfUsers = numberOfUsers;
        this.totalSpent = totalSpent;
    }

    public Group getGroup() {
        return group;
    }

    public void setGroup(Group group) {
        this.group = group;
    }

    public int getNumberOfUsers() {
        return numberOfUsers;
    }

    public void setNumberOfUsers(int numberOfUsers) {
        this.numberOfUsers = numberOfUsers;
    }



    public double getTotalSpent() {
        return totalSpent;
    }

    public void setTotalSpent(double totalSpent) {
        this.totalSpent = totalSpent;
    }
}
