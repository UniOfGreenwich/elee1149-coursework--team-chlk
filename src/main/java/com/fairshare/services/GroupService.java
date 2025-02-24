package com.fairshare.services;

import com.fairshare.entity.Group;
import com.fairshare.entity.User;
import com.fairshare.repository.GroupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class GroupService {
    @Autowired
    private GroupRepository groupRepository;

    public Set<User> getUsersByGroupId(Integer groupId) {
        Group group = groupRepository.findByGroupId(groupId);
        if (group != null) {
            return group.getUsers();
        } else {
            return null;
        }
    }

}
