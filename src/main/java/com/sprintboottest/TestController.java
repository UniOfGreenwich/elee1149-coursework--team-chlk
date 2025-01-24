package com.sprintboottest;

import com.sprintboottest.entity.Customer;
import com.sprintboottest.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TestController {
    @GetMapping("/getHello")
    public String getHelloWorld () {
        return "Hello World";
    }
}

