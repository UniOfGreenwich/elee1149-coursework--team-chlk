package com.fairshare.controllers;

import com.fairshare.Requests.LoginRequest;
import com.fairshare.Requests.LoginResponse;
import com.fairshare.entity.User;
import com.fairshare.repository.UserRepository;
import com.fairshare.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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
    }





