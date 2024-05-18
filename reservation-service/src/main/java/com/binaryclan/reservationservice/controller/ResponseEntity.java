package com.binaryclan.reservationservice.controller;

import lombok.*;
import org.springframework.stereotype.Service;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResponseEntity<T> {
    private Boolean success;
    private int status;
    private T data;

}

