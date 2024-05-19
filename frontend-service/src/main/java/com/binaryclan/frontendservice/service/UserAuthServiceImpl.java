package com.binaryclan.frontendservice.service;

import com.binaryclan.frontendservice.dto.ApiResponse;
import com.binaryclan.frontendservice.dto.UserAuthDTO;
import com.binaryclan.frontendservice.model.UserAuth;
import com.binaryclan.frontendservice.repository.UserAuthRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserAuthServiceImpl implements UserAuthService{
    @Autowired
    private UserAuthRepository userAuthRepository;

    @Override
    public ResponseEntity<?> getAllUserAuth() {

        return ResponseEntity.ok().body(new ApiResponse(true, HttpStatus.OK.value(), userAuthRepository.findAll()));
    }

    @Override
    public ResponseEntity<?> getUserAuthById(int id) {
        return ResponseEntity.ok().body(new ApiResponse(true, HttpStatus.OK.value(), userAuthRepository.findById(id)));
    }

    @Override
    public ResponseEntity<?> createUserAuth(UserAuthDTO userAuthDTO) {
        UserAuth userAuth = new UserAuth();
        userAuth.setUserName(userAuthDTO.getUserName());
        userAuth.setPassword(userAuthDTO.getPassword());
        return ResponseEntity.ok().body(new ApiResponse(true, HttpStatus.OK.value(), userAuthRepository.save(userAuth)));
    }

    @Override
    public ResponseEntity<?> updateUserAuth(int id,UserAuthDTO userAuthDTO) {
        UserAuth userAuth = this.userAuthRepository.findById(id).orElseThrow(()-> new RuntimeException("User Auth not found"));
        userAuth.setPassword(userAuthDTO.getPassword());
        userAuth.setUserName(userAuthDTO.getUserName());

        return ResponseEntity.ok().body(new ApiResponse(true, HttpStatus.OK.value(), userAuthRepository.save(userAuth)));
    }

    @Override
    public ResponseEntity<?> deleteUserAuth(int id) {
        return ResponseEntity.ok().body(new ApiResponse(true, HttpStatus.OK.value(), "User " + id +"deleted successfuly"));
    }
}
