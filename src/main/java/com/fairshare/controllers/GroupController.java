package com.fairshare.controllers;

import com.fairshare.entity.User;
import com.fairshare.repository.UserRepository;
import com.fairshare.services.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/group")
public class GroupController {

    @Autowired
    private GroupService groupService;

    @GetMapping("/{groupId}/name")
    public String getGroupName(@PathVariable Integer groupId) {
        return groupService.getGroupNameById(groupId);
    }

    @GetMapping ("/{groupId}/users")
    public Set<User> getUsersByGroupId(@PathVariable Integer groupId) {
        return groupService.getUsersByGroupId(groupId);
    }
}









