package com.fairshare.controllers;

import com.fairshare.Responses.FriendsResponse;
import com.fairshare.services.FriendsService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class FriendsControllerTest {
    @Mock
    private FriendsService friendsService;

    @InjectMocks
    private FriendsController friendsController;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testSendFriendRequest() {
        Integer userId = 1;
        Integer friendUserId = 2;
        FriendsResponse response = new FriendsResponse("Request Send", true);
        when(friendsService.sendFriendRequest(userId, friendUserId)).thenReturn(response);

        FriendsResponse result = friendsController.sendFriendRequest(userId, friendUserId);

        assertEquals(response, result);
        verify(friendsService, times(1)).sendFriendRequest(userId, friendUserId);
    }

    @Test
    void testAcceptFriendRequest() {
        Integer requestId = 1;
        doNothing().when(friendsService).acceptFriendRequest(requestId);

        ResponseEntity<String> response = friendsController.acceptFriendRequest(requestId);

        assertEquals(ResponseEntity.ok("Friend request accepted."), response);
        verify(friendsService, times(1)).acceptFriendRequest(requestId);
    }

}
