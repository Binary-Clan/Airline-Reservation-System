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

    ReservationService reservationService;

     @GetMapping("/reservations")
     public List<ReservationDTO> getAllReservations() {
         return reservationService.getReservations();
     }

     @PostMapping("/reservations")
    public void createReservation(@RequestBody ReservationDTO reservationDTO) {
        reservationService.createReservation(reservationDTO);
    }

    @GetMapping("/reservations/{id}")
    public ReservationDTO getReservation(@PathVariable Integer id) {
        return reservationService.getReservation(id);
    }

    @PutMapping("/reservations/{id}")
    public void updateReservation(@RequestBody Integer id, ReservationDTO reservationDTO) {
        reservationService.updateReservation(id, reservationDTO);
    }

    @DeleteMapping("/reservations/{id}")
    public void deleteReservation(@PathVariable Integer id) {
        reservationService.deleteReservation(id);
    }
}
