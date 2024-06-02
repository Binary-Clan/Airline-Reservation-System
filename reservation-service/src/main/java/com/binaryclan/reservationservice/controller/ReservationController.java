package com.binaryclan.reservationservice.controller;

import com.binaryclan.reservationservice.dto.ReservationDTO;
import com.binaryclan.reservationservice.service.ReservationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin("*")
@RestController
@RequestMapping("/airline_reservation/api/reservations")
public class ReservationController {

    private final ReservationService reservationService;

    public ReservationController(ReservationService reservationService) {
        this.reservationService = reservationService;
    }

    @GetMapping
     public ResponseEntity<List<ReservationDTO>> getAllReservations() {
         return reservationService.getReservations();
     }

     @PostMapping
    public ResponseEntity<ReservationDTO> createReservation(@RequestBody ReservationDTO reservationDTO) {
         System.out.println("hiiiiiiii"+reservationDTO);
        return reservationService.createReservation(reservationDTO);
    }

    @GetMapping(path = "{id}")
    public ResponseEntity<ReservationDTO> getReservation(@PathVariable Integer id) {
        return reservationService.getReservation(id);
    }

    @PutMapping(path = "{id}")
    public ResponseEntity<ReservationDTO> updateReservation(@PathVariable Integer id, @RequestBody ReservationDTO reservationDTO) {
        return reservationService.updateReservation(id, reservationDTO);
    }

    @DeleteMapping(path = "{id}")
    public ResponseEntity<String> deleteReservation(@PathVariable Integer id) {
        return reservationService.deleteReservation(id);
    }
}
