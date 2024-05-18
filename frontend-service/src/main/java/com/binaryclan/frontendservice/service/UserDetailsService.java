package com.binaryclan.frontendservice.service;

import org.springframework.http.ResponseEntity;

public interface UserDetailsService {
    public ResponseEntity<?> getAllUserDetails();
    public ResponseEntity<?> getUserDetailsById(int id);
}
