package com.binaryclan.frontendservice.service;

import com.binaryclan.frontendservice.model.UserAuth;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface UserAuthService {
    public ResponseEntity<?> getAllUserAuthDetails();
}
