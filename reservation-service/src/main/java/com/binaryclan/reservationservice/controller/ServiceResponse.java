package com.binaryclan.reservationservice.controller;

import com.binaryclan.reservationservice.dto.ReservationDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.http.ResponseEntity;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ServiceResponse {
    private String message;
    private ReservationDTO reservationDTO;
}
