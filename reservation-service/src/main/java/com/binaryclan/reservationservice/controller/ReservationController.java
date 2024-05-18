package com.binaryclan.reservationservice.controller;

import com.binaryclan.reservationservice.dto.ReservationDTO;
import com.binaryclan.reservationservice.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin("*")
@RestController
@RequestMapping("/airline_reservation/api")
public class ReservationController {

    @Autowired
    ReservationService reservationService;

     @GetMapping("/Reservations")
     public List<ReservationDTO> getAllReservations() {
         return reservationService.getReservations();
     }

     @PostMapping("/Reservations")
    public void createReservation(ReservationDTO reservationDTO) {
        reservationService.createReservation(reservationDTO);
    }

    @GetMapping("/Reservations/{id}")
    public ReservationDTO getReservation(Integer id) {
        return reservationService.getReservation(id);
    }

    @PutMapping("/Reservations/{id}")
    public void updateReservation(Integer id, ReservationDTO reservationDTO) {
        reservationService.updateReservation(id, reservationDTO);
    }

    @DeleteMapping("/Reservations/{id}")
    public void deleteReservation(Integer id) {
        reservationService.deleteReservation(id);
    }
}
