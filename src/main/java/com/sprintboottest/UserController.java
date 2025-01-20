package com.sprintboottest;

import com.sprintboottest.model.UserModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

//First entrypoint for a request from an application
//When they make a request will hit the controller first

@RestController
public class UserController {

    private Map<String, UserModel> userMap = new HashMap<>();

    public UserController() {
        userMap.put("Kyle", new UserModel("Kyle", "Anderson", 12345));
        userMap.put("Kyle Jr", new UserModel("Kyle Jr", "Anderson", 143567));
    }

    @GetMapping("/getUser/{userName}")
    public UserModel getUser(@PathVariable String userName) {
        return userMap.get(userName);
    }
}
