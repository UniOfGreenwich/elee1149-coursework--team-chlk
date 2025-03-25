package com.fairshare.controllers;

import com.fairshare.DTO.UserWithBalance;
import com.fairshare.Requests.CreateGroupRequest;
import com.fairshare.entity.Group;
import com.fairshare.entity.User;
import com.fairshare.repository.GroupRepository;
import com.fairshare.repository.UserRepository;
import com.fairshare.services.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;
import java.util.Set;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/group")
public class GroupController {

    @Autowired
    private GroupService groupService;
    @Autowired
    private GroupRepository groupRepository;

    @GetMapping("/{groupId}/name") //(Working with Hopscotch 24/02/25)
    public String getGroupName(@PathVariable Integer groupId) {
        return groupService.getGroupNameById(groupId);
    }

    @GetMapping ("/{groupId}/{userId}/users") //(Working with Hopscotch 24/02/25)
    public Set<UserWithBalance> getUsersByGroupId(@PathVariable Integer groupId, @PathVariable Integer userId) {
        return groupService.getUsersByGroupId(groupId, userId);
    }

    @PostMapping("/create") //(Working with Hopscotch 24/02/25)
    public Group createGroup(@RequestBody CreateGroupRequest request) {
        String groupName = request.getGroupName();
        Integer userId = request.getUserId();
        return groupService.createGroup(groupName, userId);
    }

    @PostMapping("/{groupId}/addUser") //(Working with Hopscotch 24/02/25)
    /*
    Notes:
    Make sure you add @Schema to the join table part this took me an hour to find out.
    Make sure PK columns are set to Serial and have no data in them when trying to run calls
    it messes with the auto increment.\
    Add @JsonIgnore to avoid massive response
    Ensure passing right variables to Service to not get null name
     */
    public void addUserToGroup(@PathVariable Integer groupId, @RequestBody Integer userId) {
        groupService.addUserToGroup(groupId, userId);
    }


}









