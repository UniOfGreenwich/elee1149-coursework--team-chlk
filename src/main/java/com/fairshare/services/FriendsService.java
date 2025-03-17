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

    public void acceptFriendRequest(Integer requestId) {
        Friends friend = friendsRepository.findById(requestId).orElseThrow();
        friend.setStatus(true); //set as 'ACCEPTED'
        friendsRepository.save(friend);
    }

    public void declineFriendRequest(Integer requestId) {
        friendsRepository.deleteById(requestId);
    }

    public List<Friends> getFriendsList(Integer userId) {
        return friendsRepository.findByFriendUserIdandStatus(userId, true);
    }

    public List<Friends> getPendingFriendRequests(Integer userId) {
        return friendsRepository.findByFriendUserIdandStatus(userId, false);
    }

    public boolean areFriends(Integer userId, Integer friendUserId) {
        return friendsRepository.existsFriendship(userId, friendUserId);
    }
}
