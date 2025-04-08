package com.fairshare.services;

import com.fairshare.DTO.UserWithBalance;
import com.fairshare.Requests.CreateGroupRequest;
import com.fairshare.entity.Group;
import com.fairshare.entity.User;
import com.fairshare.repository.GroupRepository;
import com.fairshare.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Date;
import java.util.HashSet;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class GroupServiceTest {

    @Mock
    private GroupRepository groupRepository;

    @Mock
    private UserRepository userRepository;

    @Mock
    private BalanceService balanceService;

    @InjectMocks
    private GroupService groupService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetGroupNameById() {
        Integer groupId = 1;
        String groupName = "Test Group";
        Group testGroup = new Group();
        testGroup.setGroupName(groupName);

        when(groupRepository.findById(groupId)).thenReturn(Optional.of(testGroup));

        String result = groupService.getGroupNameById(groupId);

        assertEquals(groupName, result);
    }

    @Test
    void testGetGroupNameByIdNotFound() {
        Integer groupId = 1;

        when(groupRepository.findById(groupId)).thenReturn(Optional.empty());

        String result = groupService.getGroupNameById(groupId);

        assertNull(result);
    }



    @Test
    void testCreateGroup() {
        CreateGroupRequest request = new CreateGroupRequest("Test Group", 1, null);
        User user = new User();
        Group group = new Group();
        group.setGroupName(request.getGroupName());
        group.setDateCreated(new Date());
        group.getUsers().add(user);

        when(userRepository.findById(request.getUserId())).thenReturn(Optional.of(user));
        when(groupRepository.save(any(Group.class))).thenReturn(group);

        Group result = groupService.createGroup(request);

        assertEquals(request.getGroupName(), result.getGroupName());
        assertEquals(1, result.getUsers().size());
        assertTrue(result.getUsers().contains(user));
        verify(userRepository).findById(request.getUserId());
        verify(groupRepository).save(any(Group.class));
    }

    @Test
    void testCreateGroupUserNotFound() {
        CreateGroupRequest request = new CreateGroupRequest("Test Group", 1, null);

        when(userRepository.findById(request.getUserId())).thenReturn(Optional.empty());

        Group result = groupService.createGroup(request);

        assertNull(result);
        verify(userRepository).findById(request.getUserId());
        verifyNoInteractions(groupRepository);
    }

    @Test
    void testAddUserToGroup() {
        Integer groupId = 1;
        Integer userId = 1;
        Group group = new Group();
        group.setUsers(new HashSet<>());
        User user = new User();

        when(groupRepository.findById(groupId)).thenReturn(Optional.of(group));
        when(userRepository.findById(userId)).thenReturn(Optional.of(user));

        Group result = groupService.addUserToGroup(groupId, userId);

        verify(groupRepository).save(group);
        assertEquals(1, result.getUsers().size());
        assertTrue(result.getUsers().contains(user));
    }

    @Test
    void testAddUserToGroupGroupNotFound() {
        Integer groupId = 1;
        Integer userId = 1;

        when(groupRepository.findById(groupId)).thenReturn(Optional.empty());
        when(userRepository.findById(userId)).thenReturn(Optional.of(new User()));

        Group result = groupService.addUserToGroup(groupId, userId);

        assertEquals("GroupNotFoundError", result.getGroupName());
    }

    @Test
    void testAddUserToGroupUserNotFound() {
        Integer groupId = 1;
        Integer userId = 1;
        Group group = new Group();

        when(groupRepository.findById(groupId)).thenReturn(Optional.of(group));
        when(userRepository.findById(userId)).thenReturn(Optional.empty());

        Group result = groupService.addUserToGroup(groupId, userId);

        assertEquals("UserNotFoundError", result.getGroupName());
    }
}
