package com.fairshare.controllers;

import com.fairshare.Responses.AddUserToGroupResponse;
import com.fairshare.Requests.AddUserToGroupRequest;
import com.fairshare.DTO.UserWithBalance;
import com.fairshare.Requests.CreateGroupRequest;
import com.fairshare.Responses.CreateGroupResponse;
import com.fairshare.entity.Group;
import com.fairshare.services.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/group")
public class GroupController {

    @Autowired
    private final GroupService groupService;

    @Autowired
    public GroupController(GroupService groupService) {
        this.groupService = groupService;
    }

    @GetMapping("/{groupId}/name") //(Working with Hopscotch 24/02/25)
    public String getGroupName(@PathVariable Integer groupId) {
        return groupService.getGroupNameById(groupId);
    }

    @GetMapping ("/{groupId}/{userId}/users") //(Working with Hopscotch 24/02/25)
    public Set<UserWithBalance> getUsersByGroupId(@PathVariable Integer groupId, @PathVariable Integer userId) {
        return groupService.getUsersByGroupId(groupId, userId);
    }

    @PostMapping("/create") //(Working with Hopscotch 24/02/25)
    public CreateGroupResponse createGroup(@RequestBody CreateGroupRequest request) {
        Group createdGroup = groupService.createGroup(request);
        if (createdGroup != null) {
            if (createdGroup.getGroupName() != null && createdGroup.getGroupName().equals("GroupExistsError")) {
                return new CreateGroupResponse("A group with this name already exists", false, null);
            } else {
                return new CreateGroupResponse("New group created!", true, createdGroup.getGroupId());
            }
        } else {
            return new CreateGroupResponse("User not found", false, null);
        }
    }

    @PostMapping("/{groupId}/addUser") //(Working with Hopscotch 24/02/25)
    public AddUserToGroupResponse addUserToGroup(@PathVariable Integer groupId, @RequestBody AddUserToGroupRequest addUserToGroupRequest) {
        Group result = groupService.addUserToGroup(groupId, addUserToGroupRequest.getUserId());

        if (result == null) {
            return new AddUserToGroupResponse("Either the user or group id was incorrect", false, null);
        } else if (result.getGroupName() != null && result.getGroupName().equals("GroupNotFoundError")) {
            return new AddUserToGroupResponse("Group not found", false, null);
        } else if (result.getGroupName() != null && result.getGroupName().equals("UserNotFoundError")) {
            return new AddUserToGroupResponse("User not found", false, null);
        } else if (result.getGroupName() != null && result.getGroupName().equals("GroupAndUserError")) {
            return new AddUserToGroupResponse("Group and User not found", false, null);
        } else if (result.getGroupName() != null && result.getGroupName().equals("UserAlreadyInGroup")) {
            return new AddUserToGroupResponse("User is already in this group", false, addUserToGroupRequest.getUserId());
        } else {
            return new AddUserToGroupResponse("User added to group successfully", true, addUserToGroupRequest.getUserId());
        }
    }
}









