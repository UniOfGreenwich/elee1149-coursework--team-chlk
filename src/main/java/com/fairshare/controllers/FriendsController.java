package com.fairshare.controllers;

import com.fairshare.services.FriendsService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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

    //2. acceptFriendRequest
    //3. declineFriendRequest
    //4. getFriendsList
    //5. getPendingFriendRequests
    //6. areFriends


}
