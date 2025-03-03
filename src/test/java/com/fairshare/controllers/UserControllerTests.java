package com.fairshare.controllers;

import com.fairshare.Requests.LoginRequest;
import com.fairshare.Requests.LoginResponse;
import com.fairshare.entity.User;
import com.fairshare.services.UserService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class UserControllerTests {

    @Mock
    UserService userService;

    @InjectMocks
    UserController userController;

    @Test
    void testLoginWithValidUser() {
        //Create variables to test with Mocks
        String email = "test@example.com";
        String password = "password";
        User user = new User();
        user.setUserId(001);
        LoginRequest testRequest = new LoginRequest(email, password);

        when(userService.authenticateLogin(email, password)).thenReturn(user);

        LoginResponse testResponse = userController.login(testRequest);

        //Assert our expected results
        assertEquals("Successful Login", testResponse.getMessage());
        assertEquals(true, testResponse.getSuccess());
        assertEquals(001, testResponse.getUserId());
    }
}
