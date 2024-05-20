package com.binaryclan.reservationservice.controller;

import com.binaryclan.reservationservice.dto.ReservationDTO;
import com.binaryclan.reservationservice.service.ReservationService;
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
     public List<ReservationDTO> getAllReservations() {
         return reservationService.getReservations();
     }

     @PostMapping
    public void createReservation(@RequestBody ReservationDTO reservationDTO) {
        reservationService.createReservation(reservationDTO);
    }

    @GetMapping(path = "{id}")
    public ReservationDTO getReservation(@PathVariable Integer id) {
        return reservationService.getReservation(id);
    }

    @PutMapping(path = "{id}")
    public void updateReservation(@PathVariable Integer id, @RequestBody ReservationDTO reservationDTO) {
        reservationService.updateReservation(id, reservationDTO);
    }

    @DeleteMapping(path = "{id}")
    public void deleteReservation(@PathVariable Integer id) {
        reservationService.deleteReservation(id);
    }
}
