package com.fairshare;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    @GetMapping("/getHello")
    public String getHelloWorld () {
        return "Hello World";
    }
}

