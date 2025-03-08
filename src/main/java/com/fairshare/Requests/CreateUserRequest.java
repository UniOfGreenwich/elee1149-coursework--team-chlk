package com.fairshare.Requests;

public class CreateUserRequest {

    private String firstName;
    private String lastName;
    private String username;
    private String email;
    private String password;

    public CreateUserRequest() {
    }

    public CreateUserRequest(String firstName, String lastName, String username, String email, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public String getFirstName() {return firstName;}

    public void setFirstName(String FirstName) {this.firstName = FirstName;}

    public String getLastName() {return lastName;}

    public void setLastName(String LastName) {this.lastName = LastName;}

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

    //Charu TODO: Add the fields for the CreateUserRequest class
    // Look at entity class
    // Create createUser method in UserService class
    // Create createUser method in UserController class
}
