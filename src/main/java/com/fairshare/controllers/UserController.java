package com.fairshare.controllers;


import com.fairshare.Requests.LoginRequest;
import com.fairshare.Requests.LoginResponse;
import com.fairshare.Requests.CreateUserRequest;
import com.fairshare.Requests.CreateUserResponse;
import com.fairshare.entity.User;
import com.fairshare.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//First entrypoint for a request from an application
//When they make a request will hit the controller first

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {
        User user = userService.authenticateLogin(request.getEmail(), request.getPassword());
        if (user != null) {
            return new LoginResponse("Successful Login", true, user.getUserId());
        } else {
            return new LoginResponse("Invalid Login", false, null);
        }
    }
    @PostMapping("/newUser")
    public CreateUserResponse newUser(@RequestBody CreateUserRequest request) {
        User createdUser = userService.createUser(request);
        if (createdUser != null) {
            return new CreateUserResponse("New User created!", true, createdUser.getUserId());
        } else {
            return new CreateUserResponse("User already exists", false, null);
        }
    }

}





