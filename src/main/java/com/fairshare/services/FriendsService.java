package com.fairshare.services;

import com.fairshare.entity.Friends;
import com.fairshare.repository.FriendsRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FriendsService {

    @Autowired
    private FriendsRepository friendsRepository;

    @Transactional
    public String sendFriendRequest(Integer userId, Integer friendUserId) {
        if (friendsRepository.existsFriendship(userId, friendUserId)) {
            return "Friendship already exists";
        }
        Friends friend = new Friends();
        friend.setUserId(userId);
        friend.setFriendUserId(friendUserId);
        friend.setStatus(false); //set as 'PENDING'
        friendsRepository.save(friend);
        return "Friend Request Sent";
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
        return friendsRepository.findByFriendUserIdAndStatus(userId, true);
    }

    public List<Friends> getPendingFriendRequests(Integer userId) {
        return friendsRepository.findByFriendUserIdAndStatus(userId, false);
    }

    public boolean areFriends(Integer userId, Integer friendUserId) {
        return friendsRepository.existsFriendship(userId, friendUserId);
    }
}
