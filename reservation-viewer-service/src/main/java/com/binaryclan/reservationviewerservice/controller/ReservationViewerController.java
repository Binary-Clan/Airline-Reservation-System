package com.binaryclan.reservationviewerservice.controller;

import com.binaryclan.reservationviewerservice.dto.ReservationDTO;
//import com.binaryclan.reservationviewerservice.dto.ReservationViewerDTO;
import com.binaryclan.reservationviewerservice.service.ReservationViewerService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//@RequestMapping("/airline_reservation/api/view-reservations")
/**
change the api url after creating the gateway abd front end integration.
in the front end the reservation table will update in both air-line-reservation and air-line-reservation databases.
then the reservation-viewr can acces the reservation table from the air-line-reservation database.
so that we need to change the database properties in the application.properties file. also **/

@RequestMapping("/airline_reservation/api/reservations")

public class ReservationViewerController {

    private final ReservationViewerService reservationService;

    public ReservationViewerController(ReservationViewerService reservationService) {
        this.reservationService = reservationService;
    }


    @PostMapping
    public void createReservation(@RequestBody ReservationDTO reservationDTO) {
        reservationService.createReservation(reservationDTO);
    }


    @PutMapping(path = "{id}")
    public void updateReservation(@PathVariable Integer id, @RequestBody ReservationDTO reservationDTO) {
        reservationService.updateReservation(id, reservationDTO);
    }

    @DeleteMapping(path = "{id}")
    public void deleteReservation(@PathVariable Integer id) {
        reservationService.deleteReservation(id);
    }

    @GetMapping
    public List<ReservationDTO> getAllReservations() {
        return reservationService.getReservations();
    }

    @GetMapping(path = "{id}")
    public ReservationDTO getReservation(@PathVariable Integer id) {
        return reservationService.getReservation(id);
    }

    @GetMapping("customer/{customerId}")
    public List<ReservationDTO> getReservationsByCustomerId(@PathVariable Integer customerId) {
        return reservationService.getReservationsByCustomerId(customerId);
    }

    @GetMapping("flight/{flightId}")
    public List<ReservationDTO> getReservationsByFlightId(@PathVariable Integer flightId) {
        return reservationService.getReservationsByFlightId(flightId);
    }
}
