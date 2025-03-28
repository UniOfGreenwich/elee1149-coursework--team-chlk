package com.fairshare.Requests;

public class CreateUserRequest {

    private String FirstName;
    private String LastName;
    private String username;
    private String email;
    private String password;

    public CreateUserRequest() {
    }

    public CreateUserRequest(String firstName, String lastName, String username, String email, String password) {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public String getFirstName() {return FirstName;}

    public void setFirstName(String FirstName) {this.FirstName = FirstName;}

    public String getLastName() {return LastName;}

    public void setLastName(String LastName) {this.LastName = LastName;}

    public String getUsername() {return username;}

    public void setUsername(String username) {this.username = username;}

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
