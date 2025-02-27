package com.fairshare.services;

import com.fairshare.Requests.CreateUserRequest;
import com.fairshare.entity.User;
import com.fairshare.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User authenticateLogin (String email, String password) {
        User user = userRepository.findByEmail(email);
        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        else {
            return null;
        }
    }

    public User CreateUser (CreateUserRequest createUserRequest) {
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
}
