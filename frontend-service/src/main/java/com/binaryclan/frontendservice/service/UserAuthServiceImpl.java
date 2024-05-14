package com.binaryclan.frontendservice.service;

import com.binaryclan.frontendservice.dto.ApiResponse;
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
    public ResponseEntity<?> getAllUserAuthDetails() {

        return ResponseEntity.ok().body(new ApiResponse(true, HttpStatus.OK.value(), userAuthRepository.findAll()));
    }
}
