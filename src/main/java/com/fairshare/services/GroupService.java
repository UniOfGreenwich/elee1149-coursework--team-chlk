package com.fairshare.services;

import com.fairshare.DTO.UserWithBalance;
import com.fairshare.entity.Group;
import com.fairshare.entity.User;
import com.fairshare.repository.GroupRepository;
import com.fairshare.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.stream.Collectors;

@Service
public class GroupService {
    @Autowired
    private GroupRepository groupRepository;

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private BalanceService balanceService;

    public String getGroupNameById(Integer groupId) {
        return groupRepository.findById(groupId).map(Group::getGroupName).orElse(null);
    }
    public Set<UserWithBalance> getUsersByGroupId(Integer groupId, Integer userId) {
        return groupRepository.findById(groupId).map(Group::getUsers).orElse(null)
                .stream()
                .map( user -> {
        UserWithBalance userWithBalance = new UserWithBalance(user, balanceService.getNetBalance(userId, user.getUserId()));
        userWithBalance.setBalance(balanceService.getNetBalance(userId, user.getUserId()));
        return userWithBalance;
    })
            .collect(Collectors.toSet());
    }

    public Group createGroup(String groupName, Integer userId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        Group group = new Group(null, groupName);
        group.getUsers().add(user);
        return groupRepository.save(group);
    }

    public void addUserToGroup(Integer groupId, Integer userId){
        Group group = groupRepository.findById(groupId).orElseThrow(() -> new RuntimeException("Group not found"));
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        group.getUsers().add(user);
        groupRepository.save(group);
    }
}
