package com.binaryclan.frontendservice.controller;

import com.binaryclan.frontendservice.dto.ApiResponse;
import com.binaryclan.frontendservice.model.UserAuth;
import com.binaryclan.frontendservice.service.UserAuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/airline_reservation/api")
public class UserAuthController {
    @Autowired
    UserAuthService userAuthService;

    @GetMapping("/getAllUserAuth")
    public ResponseEntity<?> getAllUsers() {
       return userAuthService.getAllUserAuthDetails();
    }
}
