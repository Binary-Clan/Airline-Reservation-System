package com.binaryclan.frontendservice.controller;

import com.binaryclan.frontendservice.service.UserAuthService;
import com.binaryclan.frontendservice.service.UserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/airline_reservation/api")
public class UserDetailsController {
    @Autowired
    UserDetailsService userDetailsService;

    @GetMapping("/getAllUserDetails")
    public ResponseEntity<?> getAllUsers() {
       return userDetailsService.getAllUserDetails();
    }

    @GetMapping("/getUserById/{id}")
    public ResponseEntity<?> getUserById(@PathVariable int id) {
        return userDetailsService.getUserDetailsById(id);
    }

}
