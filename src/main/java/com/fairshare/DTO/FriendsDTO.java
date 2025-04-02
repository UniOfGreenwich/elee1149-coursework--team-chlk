package com.fairshare.DTO;

import com.fairshare.repository.FriendsRepository;

import java.util.List;

public class FriendsDTO {
    private Integer userId;
    private String firstName;
    private String lastName;
    private String email;
    private String username;
    private Integer senderId;
    private Integer recieverId;
    private Integer requestId;

    public FriendsDTO(Integer userId, String firstName, String lastName, String email, String username) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.username = username;
    }


    public FriendsDTO(Integer userId, String firstName, String lastName, String email, String username, Integer senderId, Integer recieverId, Integer requestId) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.username = username;
        this.senderId = senderId;
        this.recieverId = recieverId;
        this.requestId = requestId;
    }

    public FriendsDTO() {

    }

    // Getters and Setters
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Integer getSenderId() {
        return senderId;
    }

    public void setSenderId(Integer senderId) {
        this.senderId = senderId;
    }

    public Integer getRecieverId() {
        return recieverId;
    }

    public void setRecieverId(Integer recieverId) {
        this.recieverId = recieverId;
    }

    public Integer getRequestId() {
        return requestId;
    }

    public void setRequestId(Integer requestId) {
        this.requestId = requestId;
    }
}
