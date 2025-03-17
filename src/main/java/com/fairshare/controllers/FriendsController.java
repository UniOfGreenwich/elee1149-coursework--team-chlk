package com.fairshare.controllers;

import com.fairshare.services.FriendsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/friends")
public class FriendsController {

    @Autowired
    private FriendsService friendsService;

    //Methods:
    //1. sendFriendRequest
    //2. acceptFriendRequest
    //3. declineFriendRequest
    //4. getFriendsList
    //5. getPendingFriendRequests
    //6. areFriends


}
