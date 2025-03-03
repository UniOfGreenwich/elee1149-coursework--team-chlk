package com.fairshare.services;

import com.fairshare.Requests.CreateUserRequest;
import com.fairshare.entity.User;
import com.fairshare.repository.BalanceRepository;
import com.fairshare.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class UserServiceTest {

    @Mock
    UserRepository userRepository;

    @InjectMocks
    UserService userService;

    String email = "test@example.com";
    String password = "password";

    @Test
    void testAuthenitcateLoginWithValidCredentials() {
        User testUser = new User();

        testUser.setEmail(email);
        testUser.setPassword(password);

        when(userRepository.findByEmail(email)).thenReturn(testUser);

        User testResult = userService.authenticateLogin(email, password);

        assertNotNull(testResult);
        assertEquals(email, testResult.getEmail());

    }

    @Test
    void testAuthenitcateLoginWithInvalidCredentials() {
        when(userRepository.findByEmail(email)).thenReturn(null);

        User testResult = userService.authenticateLogin(email, password);

        assertNull(testResult);
    }

    @Test
    void testCreateUserWhenUserDoesNotExist() {
        CreateUserRequest testCreateUserRequest = new CreateUserRequest("hello", "world", "username", "test@example.com", "password");
        User testUser = new User();
        testUser.setEmail(testCreateUserRequest.getEmail());

        when(userRepository.findByEmail(testCreateUserRequest.getEmail())).thenReturn(null);
        when(userRepository.save(any(User.class))).thenReturn(testUser);

        User result = userService.createUser(testCreateUserRequest);

        assertNotNull(result);
        assertEquals(testCreateUserRequest.getEmail(), result.getEmail());
    }

    @Test
    void testCreateUserWhenUserExists() {
        CreateUserRequest testCreateUserRequest = new CreateUserRequest("hello", "world", "username", "test@example.com", "password");
        User testUser = new User();
        testUser.setEmail(testCreateUserRequest.getEmail());

        when(userRepository.findByEmail(testCreateUserRequest.getEmail())).thenReturn(testUser);

        User result = userService.createUser(testCreateUserRequest);

        assertNull(result);
    }


}
