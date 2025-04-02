package com.fairshare.DTO;

import com.fairshare.repository.FriendsRepository;

import java.util.List;

public class FriendsDTO {
    private Integer userId;
    private String firstName;
    private String lastName;
    private String email;
    private String username;
    private List<FriendsDTO> friends;

    public FriendsDTO(Integer userId, String firstName, String lastName, String email, String username, List<FriendsDTO> friendsDTOList) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.username = username;
        this.friends = friendsDTOList;
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

    public List<FriendsDTO> getFriends() {
        return friends;
    }

    public void setFriends(List<FriendsDTO> friends) {
        this.friends = friends;
    }
}
