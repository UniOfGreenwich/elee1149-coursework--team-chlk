package com.fairshare.services;

import com.fairshare.Requests.CreateUserRequest;
import com.fairshare.Responses.GroupResponse;
import com.fairshare.entity.Group;
import com.fairshare.entity.User;
import com.fairshare.repository.GroupRepository;
import com.fairshare.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;

class UserServiceTest {

    @InjectMocks
    private UserService userService;

    @Mock
    private UserRepository userRepository;

    @Mock
    private GroupRepository groupRepository;

    @Mock
    private ExpenseService expenseService;

    @Mock
    private PasswordEncoder passwordEncoder;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testAuthenticateLogin_Success() {
        User user = new User();
        user.setPassword("encodedPassword");

        when(userRepository.findByEmail(anyString())).thenReturn(user);
        when(passwordEncoder.matches(anyString(), anyString())).thenReturn(true);

        User result = userService.authenticateLogin("email@example.com", "password");

        assertNotNull(result);
        verify(userRepository, times(1)).findByEmail("email@example.com");
        verify(passwordEncoder, times(1)).matches("password", "encodedPassword");
    }

    @Test
    void testAuthenticateLogin_Failure() {
        when(userRepository.findByEmail(anyString())).thenReturn(null);

        User result = userService.authenticateLogin("email@example.com", "password");

        assertNull(result);
        verify(userRepository, times(1)).findByEmail("email@example.com");
        verify(passwordEncoder, never()).matches(anyString(), anyString());
    }

    @Test
    void testCreateUser_Success() {
        CreateUserRequest request = new CreateUserRequest();
        request.setEmail("email@example.com");
        request.setPassword("password");

        when(userRepository.findByEmail(anyString())).thenReturn(null);
        when(passwordEncoder.encode(anyString())).thenReturn("encodedPassword");
        when(userRepository.save(any(User.class))).thenReturn(new User());

        User result = userService.createUser(request);

        assertNotNull(result);
        verify(userRepository, times(1)).findByEmail("email@example.com");
        verify(passwordEncoder, times(1)).encode("password");
        verify(userRepository, times(1)).save(any(User.class));
    }

    @Test
    void testCreateUser_AlreadyExists() {
        CreateUserRequest request = new CreateUserRequest();
        request.setEmail("email@example.com");

        when(userRepository.findByEmail(anyString())).thenReturn(new User());

        User result = userService.createUser(request);

        assertNull(result);
        verify(userRepository, times(1)).findByEmail("email@example.com");
        verify(passwordEncoder, never()).encode(anyString());
        verify(userRepository, never()).save(any(User.class));
    }

    @Test
    void testGetUsersGroups_UserExists() {
        User user = new User();
        Set<Group> groups = new HashSet<>();
        Group group = new Group();
        group.setGroupId(1);
        group.setUsers(new HashSet<>());
        groups.add(group);
        user.setGroups(groups);

        when(userRepository.findById(anyInt())).thenReturn(Optional.of(user));
        when(expenseService.getTotalExpensesByGroupId(anyInt())).thenReturn(100.0);

        List<GroupResponse> result = userService.getUsersGroups(1);

        assertNotNull(result);
        assertEquals(1, result.size());
        verify(userRepository, times(1)).findById(1);
        verify(expenseService, times(1)).getTotalExpensesByGroupId(1);
    }

    @Test
    void testGetUsersGroups_UserNotExists() {
        when(userRepository.findById(anyInt())).thenReturn(Optional.empty());

        List<GroupResponse> result = userService.getUsersGroups(1);

        assertNull(result);
        verify(userRepository, times(1)).findById(1);
        verify(expenseService, never()).getTotalExpensesByGroupId(anyInt());
    }

    @Test
    void testGetNumOfUsersInGroup_GroupExists() {
        Group group = new Group();
        group.setUsers(new HashSet<>());

        when(groupRepository.findById(anyInt())).thenReturn(Optional.of(group));

        int result = userService.getNumOfUsersInGroup(1);

        assertEquals(0, result);
        verify(groupRepository, times(1)).findById(1);
    }

    @Test
    void testGetNumOfUsersInGroup_GroupNotExists() {
        when(groupRepository.findById(anyInt())).thenReturn(Optional.empty());

        int result = userService.getNumOfUsersInGroup(1);

        assertEquals(0, result);
        verify(groupRepository, times(1)).findById(1);
    }
}
