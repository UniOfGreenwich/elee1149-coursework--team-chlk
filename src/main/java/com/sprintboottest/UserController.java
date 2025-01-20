package com.sprintboottest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

//First entrypoint for a request from an application
//When they make a request will hit the controller first

@RestController
public class UserController {
    @GetMapping("/getUser")
    public String getUser() {
        return "Kyle Anderson";
    }
}
