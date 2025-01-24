package com.fairshare;

import com.fairshare.entity.Customer;
import com.fairshare.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

//First entrypoint for a request from an application
//When they make a request will hit the controller first

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private CustomerRepository customerRepository;

    @GetMapping("/getUser")
    public List<Customer> getAllCustomer() {
        return customerRepository.findAll();
    }
}
