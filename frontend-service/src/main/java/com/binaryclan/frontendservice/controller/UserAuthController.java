package com.binaryclan.frontendservice.controller;

import com.binaryclan.frontendservice.dto.UserAuthDTO;
import com.binaryclan.frontendservice.service.UserAuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/airline_reservation/api")
public class UserAuthController {
    @Autowired
    UserAuthService userAuthService;

    @GetMapping("/getAllUserAuth")
    public ResponseEntity<?> getAllUsers() {
       return userAuthService.getAllUserAuth();
    }

    @GetMapping("/getUserAuthById/{id}")
    public ResponseEntity<?> getUserAuthById(@PathVariable int id) {
        return userAuthService.getUserAuthById(id);
    }

    @PostMapping("/addUserAuth")
    public ResponseEntity<?> createserAuthById(@RequestBody UserAuthDTO userAuthDTO) {
        return userAuthService.createUserAuth(userAuthDTO);
    }

    @PutMapping("/updateUserAuth")
    public ResponseEntity<?> updateAuthById(@RequestBody int id, UserAuthDTO userAuthDTO) {
        return userAuthService.updateUserAuth(id,userAuthDTO);
    }

    @DeleteMapping("/deleteUserAuth/{id}")
    public ResponseEntity<?> delteUserAuthById(@RequestBody int id) {
        return userAuthService.deleteUserAuth(id);
    }


}
