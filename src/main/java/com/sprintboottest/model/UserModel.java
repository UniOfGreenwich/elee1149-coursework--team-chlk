package com.sprintboottest.model;

public class UserModel {
    private String firstName;
    private String lastName;
    private Integer memberShipId;

    public UserModel(String firstName, String lastName, Integer memberShipId) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.memberShipId = memberShipId;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public Integer getMemberShipId() {
        return memberShipId;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setMemberShipId(Integer memberShipId) {
        this.memberShipId = memberShipId;
    }
}
