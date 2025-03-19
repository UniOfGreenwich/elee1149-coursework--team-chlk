package com.fairshare.controllers;

import com.fairshare.entity.Friends;
import com.fairshare.services.FriendsService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/friends")
public class FriendsController {

    @Autowired
    private FriendsService friendsService;

    //Methods:
    //1. sendFriendRequest
    @PostMapping("/sendRequest")
    public ResponseEntity<String> sendFriendRequest(@RequestParam Integer userId, @RequestParam Integer friendUserId) {
        friendsService.sendFriendRequest(userId, friendUserId);
        return ResponseEntity.ok("Friend Request Sent");
    }

    @PostMapping("/acceptFriendRequest")
    public ResponseEntity<String> acceptFriendRequest(@RequestParam Integer requestId) {
        friendsService.acceptFriendRequest(requestId);
        return ResponseEntity.ok("Friend request accepted.");
    }

    @DeleteMapping("/declineRequest")
    public ResponseEntity<String> declineFriendRequest(@RequestParam Integer requestId) {
        friendsService.declineFriendRequest(requestId);
        return ResponseEntity.ok("Friend request deleted");
    }

    @GetMapping("/list")
    public ResponseEntity<List<Friends>> getFriendsList(@RequestParam Integer userId) {
        List<Friends> friendsList = friendsService.getFriendsList(userId);
        return ResponseEntity.ok(friendsList);
    }

    @GetMapping("pendingRequests")
    public ResponseEntity<List<Friends>> getPendingFriendRequests(@RequestParam Integer userId, @RequestParam Integer friendUserId) {
        List<Friends> pendingRequestsList = friendsService.getPendingFriendRequests(userId);
        return ResponseEntity.ok(pendingRequestsList);
    }
}
