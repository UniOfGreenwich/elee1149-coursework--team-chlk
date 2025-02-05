package com.fairshare.controllers;

import com.fairshare.entity.User;
import com.fairshare.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/group")
public class GroupController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping ("/{groupId}/users")
    public List<User> getUsersByGroupId(@PathVariable String groupId) {
        return userRepository.findByGroupId(groupId);
    }
}









