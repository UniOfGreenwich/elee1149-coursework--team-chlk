package com.fairshare.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;


import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Entity
@Table(name = "users", schema = "fairdbo")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Integer userId;

    @Column(name = "firstname")
    private String firstName;

    @Column(name = "lastname")
    private String lastName;

    @Column(name = "email")
    private String email;

    @Column(name = "username")
    private String username;

    @Column(name = "passwordhash")
    private String passwordHash;

    @Column(name = "password")
    private String password;

    @ManyToMany (mappedBy = "users")
    @JsonIgnore // Add this to avoid random massive response
    private Set<Group> groups;

    public User(Integer userId, String firstName, String lastName, String email, String username, String passwordHash, String password) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.username = username;
        this.passwordHash = passwordHash;
        this.password = password;
    }

    public User() {

    }


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

    public String getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<Group> getGroups() {
        return groups;
    }

    public void setGroups(Set<Group> groups) {
        this.groups = groups;
    }
}