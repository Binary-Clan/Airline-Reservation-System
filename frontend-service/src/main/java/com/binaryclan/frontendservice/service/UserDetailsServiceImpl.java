package com.binaryclan.frontendservice.service;

import com.binaryclan.frontendservice.dto.ApiResponse;
import com.binaryclan.frontendservice.repository.UserAuthRepository;
import com.binaryclan.frontendservice.repository.UserDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService{
    @Autowired
    private UserDetailsRepository userDetailsRepository;


    @Override
    public ResponseEntity<?> getAllUserDetails() {
        return ResponseEntity.ok().body(new ApiResponse(true, HttpStatus.OK.value(),userDetailsRepository.findAll()));
    }

    @Override
    public ResponseEntity<?> getUserDetailsById(int id) {
        return ResponseEntity.ok().body(new ApiResponse(true, HttpStatus.OK.value(),userDetailsRepository.findById(id)));
    }
}
