package com.binaryclan.frontendservice.controller;

import com.binaryclan.frontendservice.dto.UserAuthDTO;
import com.binaryclan.frontendservice.service.UserAuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/airline_reservation/api/userAuth")
public class UserAuthController {
    @Autowired
    UserAuthService userAuthService;

    @GetMapping
    public ResponseEntity<?> getAllUsers() {
       return userAuthService.getAllUserAuth();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getUserAuthById(@PathVariable int id) {
        return userAuthService.getUserAuthById(id);
    }

    @PostMapping
    public ResponseEntity<?> createserAuthById(@RequestBody UserAuthDTO userAuthDTO) {
        return userAuthService.createUserAuth(userAuthDTO);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateAuthById(@PathVariable int id, @RequestBody UserAuthDTO userAuthDTO) {
        return userAuthService.updateUserAuth(id,userAuthDTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delteUserAuthById(@PathVariable int id) {
        return userAuthService.deleteUserAuth(id);
    }


}
