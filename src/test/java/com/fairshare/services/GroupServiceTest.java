package com.fairshare.services;

import com.fairshare.DTO.UserWithBalance;
import com.fairshare.entity.Group;
import com.fairshare.entity.User;
import com.fairshare.repository.GroupRepository;
import com.fairshare.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class GroupServiceTest {

    @Mock
    private GroupRepository groupRepository;

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private GroupService groupService;

    @Test
    void testGetGroupNameById() {
        Integer groupId = 1;
        String groupName = "Test Group";
        Group testGroup = new Group(groupId, groupName);

        when(groupRepository.findById(groupId)).thenReturn(Optional.of(testGroup));

        String result = groupService.getGroupNameById(groupId);

        assertEquals(groupName, result);
    }

    @Test
    void testGetGroupNameByIdNotFound() {
        Integer groupId = 1;

        when(groupRepository.findById(groupId)).thenReturn(Optional.empty());

        String result = groupService.getGroupNameById(groupId);

        assertEquals(null, result);
    }

    @Test
    void testGetUsersByGroupId() {
        Integer groupId = 1;
        Integer userId = 1;
        Set<User> users = new HashSet<>();
        Group group = new Group(groupId, "Test Group");
        group.setUsers(users);

        when(groupRepository.findById(groupId)).thenReturn(Optional.of(group));

        Set<UserWithBalance> result = groupService.getUsersByGroupId(groupId, userId);

        assertEquals(users, result);
    }

    @Test
    void testCreateGroup() {
        String groupName = "Test Group";
        Integer userId = 1;
        User user = new User();
        Group group = new Group(null, groupName);
        group.getUsers().add(user);

        when(userRepository.findById(userId)).thenReturn(Optional.of(user));
        when(groupRepository.save(any(Group.class))).thenReturn(group);

        Group result = groupService.createGroup(groupName, userId);

        assertEquals(groupName, result.getGroupName());
        assertEquals(1, result.getUsers().size());
        assertEquals(user, result.getUsers().iterator().next());
    }

    @Test
    void testCreateGroupUserNotFound() {
        String groupName = "Test Group";
        Integer userId = 1;

        when(userRepository.findById(userId)).thenReturn(Optional.empty());

        assertThrows(RuntimeException.class, () -> groupService.createGroup(groupName, userId));
    }

    @Test
    void testAddUserToGroup() {
        Integer groupId = 1;
        Integer userId = 1;
        Group group = new Group(groupId, "Test Group");
        User user = new User();

        when(groupRepository.findById(groupId)).thenReturn(Optional.of(group));
        when(userRepository.findById(userId)).thenReturn(Optional.of(user));

        groupService.addUserToGroup(groupId, userId);

        verify(groupRepository).save(group);
        assertEquals(1, group.getUsers().size());
        assertEquals(user, group.getUsers().iterator().next());
    }

    @Test
    void testAddUserToGroupGroupNotFound() {
        Integer groupId = 1;
        Integer userId = 1;

        when(groupRepository.findById(groupId)).thenReturn(Optional.empty());

        assertThrows(RuntimeException.class, () -> groupService.addUserToGroup(groupId, userId));
    }

    @Test
    void testAddUserToGroupUserNotFound() {
        Integer groupId = 1;
        Integer userId = 1;
        Group group = new Group(groupId, "Test Group");

        when(groupRepository.findById(groupId)).thenReturn(Optional.of(group));
        when(userRepository.findById(userId)).thenReturn(Optional.empty());

        assertThrows(RuntimeException.class, () -> groupService.addUserToGroup(groupId, userId));
    }

}
