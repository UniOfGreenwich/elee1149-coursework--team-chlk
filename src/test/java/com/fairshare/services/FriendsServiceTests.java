package com.fairshare.services;

import com.fairshare.DTO.FriendsDTO;
import com.fairshare.DTO.FriendsListDTO;
import com.fairshare.Responses.FriendsResponse;
import com.fairshare.entity.Friends;
import com.fairshare.entity.User;
import com.fairshare.repository.FriendsRepository;
import com.fairshare.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class FriendsServiceTests {

    @Mock
    private FriendsRepository friendsRepository;

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private FriendsService friendsService;

    @Test
    void testSendFriendRequest_UserNotFound() {
        when(userRepository.existsByEmail(anyString())).thenReturn(false);

        FriendsResponse response = friendsService.sendFriendRequest(1, "friend@example.com");

        assertFalse(response.isSuccess());
        assertEquals("User not found", response.getMessage());
        verify(userRepository, times(1)).existsByEmail("friend@example.com");
    }

    @Test
    void testSendFriendRequest_AlreadySent() {
        User friendUser = new User();
        friendUser.setUserId(2);

        when(userRepository.existsByEmail(anyString())).thenReturn(true);
        when(userRepository.findByEmail(anyString())).thenReturn(friendUser);
        when(friendsRepository.existsFriendship(anyInt(), anyInt())).thenReturn(true);

        FriendsResponse response = friendsService.sendFriendRequest(1, "friend@example.com");

        assertFalse(response.isSuccess());
        assertEquals("Friend request already sent", response.getMessage());
        verify(userRepository, times(1)).existsByEmail("friend@example.com");
        verify(friendsRepository, times(1)).existsFriendship(1, 2);
    }

    @Test
    void testSendFriendRequest_Success() {
        User friendUser = new User();
        friendUser.setUserId(2);

        when(userRepository.existsByEmail(anyString())).thenReturn(true);
        when(userRepository.findByEmail(anyString())).thenReturn(friendUser);
        when(friendsRepository.existsFriendship(anyInt(), anyInt())).thenReturn(false);

        FriendsResponse response = friendsService.sendFriendRequest(1, "friend@example.com");

        assertTrue(response.isSuccess());
        assertEquals("Friend request sent", response.getMessage());
        verify(friendsRepository, times(1)).save(any(Friends.class));
    }

    @Test
    void testAcceptFriendRequest() {
        Friends friend = new Friends();
        friend.setStatus(false);

        when(friendsRepository.findById(anyInt())).thenReturn(Optional.of(friend));

        friendsService.acceptFriendRequest(1);

        assertTrue(friend.getStatus());
        verify(friendsRepository, times(1)).save(friend);
    }

    @Test
    void testDeclineFriendRequest() {
        friendsService.declineFriendRequest(1);
        verify(friendsRepository, times(1)).deleteById(1);
    }

    @Test
    void testGetFriendsList() {
        List<Friends> friends = new ArrayList<>();
        Friends friend = new Friends();
        friends.add(friend);

        when(friendsRepository.findByFriendUserIdAndStatus(anyInt(), eq(true))).thenReturn(friends);

        List<Friends> result = friendsService.getFriendsList(1);

        assertEquals(1, result.size());
        verify(friendsRepository, times(1)).findByFriendUserIdAndStatus(1, true);
    }

    @Test
    void testGetUserWithFriends() {
        List<Friends> friendsList = new ArrayList<>();
        Friends friend = new Friends();
        friend.setUserId(1);
        friend.setFriendUserId(2);
        friendsList.add(friend);

        User friendUser = new User();
        friendUser.setUserId(2);
        friendUser.setFirstName("First");
        friendUser.setLastName("Last");
        friendUser.setEmail("friend@example.com");
        friendUser.setUsername("friendUser");

        when(friendsRepository.findFriendsByUserId(anyInt())).thenReturn(friendsList);
        when(userRepository.findById(anyInt())).thenReturn(Optional.of(friendUser));

        FriendsListDTO result = friendsService.getUserWithFriends(1);

        assertEquals(1, result.getFriends().size());
        verify(friendsRepository, times(1)).findFriendsByUserId(1);
        verify(userRepository, times(1)).findById(2);
    }

    @Test
    void testGetPendingFriendRequests() {
        List<Friends> pendingRequestsList = new ArrayList<>();
        Friends pendingRequest = new Friends();
        pendingRequest.setUserId(1);
        pendingRequest.setFriendUserId(2);
        pendingRequestsList.add(pendingRequest);

        User user = new User();
        user.setUserId(2);
        user.setFirstName("First");
        user.setLastName("Last");
        user.setEmail("friend@example.com");
        user.setUsername("friendUser");

        when(friendsRepository.findPendingRequestsByUserId(anyInt())).thenReturn(pendingRequestsList);
        when(userRepository.findById(anyInt())).thenReturn(Optional.of(user));

        FriendsListDTO result = friendsService.getPendingFriendRequests(1);

        assertEquals(1, result.getFriends().size());
        verify(friendsRepository, times(1)).findPendingRequestsByUserId(1);
        verify(userRepository, times(1)).findById(2);
    }

    @Test
    void testAreFriends() {
        when(friendsRepository.existsFriendship(anyInt(), anyInt())).thenReturn(true);

        boolean result = friendsService.areFriends(1, 2);

        assertTrue(result);
        verify(friendsRepository, times(1)).existsFriendship(1, 2);
    }
}
