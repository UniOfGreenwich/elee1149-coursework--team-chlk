package com.fairshare.services;

import com.fairshare.Requests.CreateGroupRequest;
import com.fairshare.entity.Group;
import com.fairshare.entity.User;
import com.fairshare.repository.GroupRepository;
import com.fairshare.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class GroupService {

    private final GroupRepository groupRepository;
    private final UserRepository userRepository;

    @Autowired
    public GroupService(GroupRepository groupRepository, UserRepository userRepository) {
        this.groupRepository = groupRepository;
        this.userRepository = userRepository;
    }

    public String getGroupNameById(Integer groupId) {
        return groupRepository.findById(groupId).map(Group::getGroupName).orElse(null);
    }

    public Set<User> getUsersByGroupId(Integer groupId) {
        return groupRepository.findById(groupId).map(Group::getUsers).orElse(null);
    }

    public Group createGroup(CreateGroupRequest createGroupRequest) {
        String groupName = createGroupRequest.getGroupName();
        Integer adminId = createGroupRequest.getAdminId();
        Integer groupId = createGroupRequest.getGroupId();

        User admin = userRepository.findById(adminId)
                .orElse(null);

        if (admin == null) {
            return null; // Indicates user not found
        }

        if (groupRepository.existsByGroupName(groupName) || groupRepository.existsByGroupId(groupId)) {
            Group errorGroup = new Group();
            errorGroup.setGroupName("GroupExistsError");
            return errorGroup; // Indicate group exists
        }

        Group newGroup = new Group();
        newGroup.setGroupName(groupName);
        newGroup.setAdmin(admin); // Set the admin
        newGroup.getUsers().add(admin); // Add admin to the users set as well

        return groupRepository.save(newGroup);
    }

    public Group addUserToGroup(Integer groupId, Integer userId) {
        Group group = groupRepository.findById(groupId)
                .orElse(null);
        User user = userRepository.findById(userId)
                .orElse(null);

        if (group == null && user == null) {
            Group errorGroup = new Group();
            errorGroup.setGroupName("GroupAndUserError");
            return errorGroup;
        } else if (group == null) {
            Group errorGroup = new Group();
            errorGroup.setGroupName("GroupNotFoundError");
            return errorGroup;
        } else if (user == null) {
            Group errorGroup = new Group();
            errorGroup.setGroupName("UserNotFoundError");
            return errorGroup;
        }

        if (group.getUsers().contains(user)) {
            Group errorGroup = new Group();
            errorGroup.setGroupName("UserAlreadyInGroup");
            return errorGroup;
        }

        group.getUsers().add(user);
        groupRepository.save(group);
        return group;
    }

}
