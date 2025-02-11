package com.fairshare.controllers;

import com.fairshare.entity.User;
import com.fairshare.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

//First entrypoint for a request from an application
//When they make a request will hit the controller first

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/getUser")
    public List<User> getAllCustomer() {
        return userRepository.findAll();
    }





}
