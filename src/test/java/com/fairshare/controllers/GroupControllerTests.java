package com.fairshare.controllers;

import com.fairshare.Requests.AddUserToGroupRequest;
import com.fairshare.Requests.CreateGroupRequest;
import com.fairshare.Requests.CreateGroupResponse;
import com.fairshare.entity.Group;
import com.fairshare.entity.User;
import com.fairshare.services.GroupService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.HashSet;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class GroupControllerTests {

    @Mock
    GroupService groupService;

    @InjectMocks
    GroupController groupController;

    @Test
    void getGroupName() {
        Integer groupId = 1;
        String groupName = "Test Group";

        when(groupService.getGroupNameById(groupId)).thenReturn(groupName);

        String result = groupController.getGroupName(groupId);

        assertEquals(groupName, result);
    }

    @Test
    void testCreateGroup() {
        //Create variables to test with Mocks
        String groupName = "Test Group";
        Integer userId = 1;
        Group testGroup = new Group(1, groupName);

        CreateGroupRequest testRequest = new CreateGroupRequest();
        testRequest.setGroupName(groupName);
        testRequest.setUserId(userId);

        when(groupService.createGroup(testRequest)).thenReturn(testGroup);

        CreateGroupResponse expectedResponse = new CreateGroupResponse("Group created successfully", true, testGroup.getGroupId());

        CreateGroupResponse result = groupController.createGroup(testRequest);

        assertEquals(expectedResponse, result);
    }

    @Test
    void testAddUserToGroup() {
        Integer groupId = 1;
        Integer userId = 1;

        

        groupController.addUserToGroup(groupId, userId);

        //Verify that the service method was called
        verify(groupService).addUserToGroup(groupId, userId);
    }

    @Test
    void testGetUsersByGroupId() {
        Integer groupId = 123;
        Set<User> users = new HashSet<>();

        User user1 = new User();
        user1.setUserId(1);
        user1.setUsername("User1");

        User user2 = new User();
        user1.setUserId(2);
        user1.setUsername("User2");

        users.add(user1);
        users.add(user2);


        when(groupService.getUsersByGroupId(groupId)).thenReturn(users);

        Set<User> result = groupController.getUsersByGroupId(groupId);

        assertEquals(users, result);
    }
}
