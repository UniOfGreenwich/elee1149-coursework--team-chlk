package com.fairshare.services;

import com.fairshare.DTO.FriendsDTO;
import com.fairshare.DTO.FriendsListDTO;
import com.fairshare.DTO.UserWithBalance;
import com.fairshare.Responses.FriendsResponse;
import com.fairshare.entity.Friends;
import com.fairshare.entity.User;
import com.fairshare.repository.FriendsRepository;
import com.fairshare.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class FriendsService {

    @Autowired
    private FriendsRepository friendsRepository;
    @Autowired
    private UserService userService;
    @Autowired
    private UserRepository userRepository;

    @Transactional
    public FriendsResponse sendFriendRequest(Integer userId, String friendEmail) {
       User friendUser = userRepository.findByEmail(friendEmail);
       Integer friendUserId = friendUser.getUserId();

        if (friendsRepository.existsFriendship(userId, friendUserId)) {
            return new FriendsResponse("Friend request already sent", false);
        }
        Friends friend = new Friends();
        friend.setUserId(userId);
        friend.setFriendUserId(friendUserId);
        friend.setStatus(false); //set as 'PENDING'
        friendsRepository.save(friend);

        return new FriendsResponse("Friend request sent", true);
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

    public FriendsListDTO getUserWithFriends(Integer userId) {
        List<Friends> friendsList = friendsRepository.findFriendsByUserId(userId);
        List<FriendsDTO> friendsDTOList = friendsList.stream()
                .map(friend -> {
                    Integer friendUserId = friend.getUserId().equals(userId) ? friend.getFriendUserId() : friend.getUserId();
                    User friendUser = userRepository.findById(friendUserId).orElseThrow();
                    return new FriendsDTO(friendUser.getUserId(), friendUser.getFirstName(), friendUser.getLastName(), friendUser.getEmail(), friendUser.getUsername());
                })
                .collect(Collectors.toList());
        return new FriendsListDTO(friendsDTOList);
    }


    public FriendsListDTO getPendingFriendRequests(Integer userId) {
        List<Friends> pendingRequestsList = friendsRepository.findPendingRequestsByUserId(userId);
        List<FriendsDTO> pendingRequestsDTOList = pendingRequestsList.stream()
                .map(friend -> {
                    Integer friendUserId = friend.getUserId().equals(userId) ? friend.getFriendUserId() : friend.getUserId();
                    User user = userRepository.findById(friendUserId).orElseThrow();
                    return new FriendsDTO(user.getUserId(), user.getFirstName(), user.getLastName(), user.getEmail(), user.getUsername(), friend.getUserId(), friend.getFriendUserId());
                })
                .collect(Collectors.toList());
        return new FriendsListDTO(pendingRequestsDTOList);
    }


    public boolean areFriends(Integer userId, Integer friendUserId) {
        return friendsRepository.existsFriendship(userId, friendUserId);
    }
}
