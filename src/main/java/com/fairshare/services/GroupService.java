package com.fairshare.services;

import com.fairshare.Requests.CreateGroupRequest;
import com.fairshare.DTO.UserWithBalance;
import com.fairshare.entity.Group;
import com.fairshare.entity.User;
import com.fairshare.repository.GroupRepository;
import com.fairshare.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
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

    public GroupService(GroupRepository groupRepository, UserRepository userRepository) {
        this.groupRepository = groupRepository;
        this.userRepository = userRepository;
    }

    public String getGroupNameById(Integer groupId) {
        return groupRepository.findById(groupId).map(Group::getGroupName).orElse(null);
    }

    public Group createGroup(CreateGroupRequest createGroupRequest) {
        String groupName = createGroupRequest.getGroupName();
        Integer userId = createGroupRequest.getUserId();
        Integer groupId = createGroupRequest.getGroupId();

        User user = userRepository.findById(userId)
                .orElse(null);

        if (user == null) {
            return null; // Indicates user not found
        }

        if (groupRepository.existsByGroupName(groupName) || groupRepository.existsByGroupId(groupId)) {
            Group errorGroup = new Group();
            errorGroup.setGroupName("GroupExistsError");
            return errorGroup; // Indicate group exists
        }

        Group newGroup = new Group();
        newGroup.setGroupName(groupName);
        newGroup.setDateCreated(new Date());
        newGroup.getUsers().add(user); // Add the user who created the group to the users set as well
        return groupRepository.save(newGroup);
    }

        public Set<UserWithBalance> getUsersByGroupId (Integer groupId, Integer userId){
            return groupRepository.findById(groupId).map(Group::getUsers).orElse(null)
                    .stream()
                    .map(user -> {
                        UserWithBalance userWithBalance = new UserWithBalance(user, balanceService.getNetBalance(userId, user.getUserId()));
                        userWithBalance.setBalance(balanceService.getNetBalance(userId, user.getUserId()));
                        return userWithBalance;
                    })
                    .collect(Collectors.toSet());
        }

        public Group addUserToGroup (Integer groupId, Integer userId){
            Group group = groupRepository.findById(groupId).orElse(null);
            User user = userRepository.findById(userId).orElse(null);

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
            group.setUpdatedAt(new Date());
            group.setMessage("User: " + user.getUsername() + " added to group");
            groupRepository.save(group);
            return group;
        }

    }


