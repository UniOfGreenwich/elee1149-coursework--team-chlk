package com.sprintboottest;

import com.sprintboottest.entity.Customer;
import com.sprintboottest.model.UserModel;
import com.sprintboottest.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

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
