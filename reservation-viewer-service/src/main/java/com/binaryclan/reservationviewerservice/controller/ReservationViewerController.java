package com.binaryclan.reservationviewerservice.controller;

import com.binaryclan.reservationviewerservice.dto.ReservationDTO;
import com.binaryclan.reservationviewerservice.dto.ReservationViewerDTO;
import com.binaryclan.reservationviewerservice.service.ReservationViewerService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/airline_reservation/api/reservations")
public class ReservationViewerController {

    private final ReservationViewerService reservationService;

    public ReservationViewerController(ReservationViewerService reservationService) {
        this.reservationService = reservationService;
    }

    @GetMapping
    public List<ReservationViewerDTO> getAllReservations() {
        return reservationService.getReservations();
    }

    @GetMapping(path = "{id}")
    public ReservationDTO getReservation(@PathVariable Integer id) {
        return reservationService.getReservation(id);
    }

    @GetMapping("customer/{customerId}")
    public List<ReservationViewerDTO> getReservationsByCustomerId(@PathVariable Integer customerId) {
        return reservationService.getReservationsByCustomerId(customerId);
    }

    @GetMapping("flight/{flightId}")
    public List<ReservationViewerDTO> getReservationsByFlightId(@PathVariable Integer flightId) {
        return reservationService.getReservationsByFlightId(flightId);
    }
}
