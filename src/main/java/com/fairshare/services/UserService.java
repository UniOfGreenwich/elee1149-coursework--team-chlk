package com.fairshare.services;

import com.fairshare.Requests.CreateUserRequest;
import com.fairshare.Requests.GroupResponse;
import com.fairshare.entity.Expense;
import com.fairshare.entity.Group;
import com.fairshare.entity.User;
import com.fairshare.repository.GroupRepository;
import com.fairshare.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static java.lang.Double.sum;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private GroupRepository groupRepository;
    @Autowired
    private ExpenseService expenseService;

    public User authenticateLogin (String email, String password) {
        User user = userRepository.findByEmail(email);
        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        else {
            return null;
        }
    }

    public User createUser(CreateUserRequest createUserRequest) {
        if (userRepository.findByEmail(createUserRequest.getEmail()) == null) {

            User newUser = new User();
            newUser.setFirstName(createUserRequest.getFirstName());
            newUser.setLastName(createUserRequest.getLastName());
            newUser.setUsername(createUserRequest.getUsername());
            newUser.setEmail(createUserRequest.getEmail());
            newUser.setPassword(createUserRequest.getPassword()); // need to ensure we can do password hashing here for security

            return userRepository.save(newUser);
        }
        else {
            return null;
        }
    }

    public List<GroupResponse> getUsersGroups (Integer userId) {
        User user = userRepository.findById(userId).orElse(null);
        if (user != null) {
            List<GroupResponse> groupResponses = new ArrayList<>();
            for (Group group : user.getGroups()) {
                GroupResponse groupResponse = new GroupResponse();
                groupResponse.setGroupId(group.getGroupId());
                groupResponse.setGroupName(group.getGroupName());
                groupResponse.setDateCreated(group.getDateCreated());
                groupResponse.setNumberOfUsers(group.getUsers().size());
                groupResponse.setTotalSpent(expenseService.getTotalExpensesByGroupId(group.getGroupId()));
                groupResponses.add(groupResponse);
            }
            return groupResponses;
        }
        return null;
    }
    
    public int getNumOfUsersInGroup (Integer groupId) {
        Group group = groupRepository.findById(groupId).orElse(null);
        if (group != null) {
            return group.getUsers().size();
        }
        return 0;
    }
}
