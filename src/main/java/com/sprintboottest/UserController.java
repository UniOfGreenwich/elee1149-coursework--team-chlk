package com.sprintboottest;

import com.sprintboottest.model.UserModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

//First entrypoint for a request from an application
//When they make a request will hit the controller first

@RestController
public class UserController {
    @GetMapping("/getUser")
    public UserModel getUser() {
        return new UserModel("Kyle", "Anderson", 12345);
    }
}
