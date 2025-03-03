package com.fairshare.services;

import com.fairshare.entity.Group;
import com.fairshare.entity.User;
import com.fairshare.repository.GroupRepository;
import com.fairshare.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class GroupService {
    @Autowired
    private GroupRepository groupRepository;

    @Autowired
    private UserRepository userRepository;

    public String getGroupNameById(Integer groupId) {
        return groupRepository.findById(groupId).map(Group::getGroupName).orElse(null);
    }
    public Set<User> getUsersByGroupId(Integer groupId) {
        return groupRepository.findById(groupId).map(Group::getUsers).orElse(null);
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
