package com.fairshare.services;

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
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class UserServiceTest {

    @Mock
    UserRepository userRepository;

    @InjectMocks
    UserService userService;


    @Test
    void testAuthenitcateLoginWithValidCredentials() {
        String email = "test@example.com";
        String password = "password";
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
        String email = "test@example.com";
        String password = "password";
        
        when(userRepository.findByEmail(email)).thenReturn(null);

        User testResult = userService.authenticateLogin(email, password);

        assertNotNull(testResult);
    }


}
