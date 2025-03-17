package com.fairshare.services;

import com.fairshare.entity.Friends;
import com.fairshare.repository.FriendsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FriendsService {

    @Autowired
    private FriendsRepository friendsRepository;

    public void sendFriendRequest(Integer userId, Integer friendUserId) {
        if (!friendsRepository.existsFriendship(userId, friendUserId)) {
            Friends friends = new Friends();
            friends.setUserId(userId);
            friends.setFriendId(friendUserId);
            friends.setStatus(false); //Set as 'PENDING'
            friendsRepository.save(friends);
        }
    }
}
