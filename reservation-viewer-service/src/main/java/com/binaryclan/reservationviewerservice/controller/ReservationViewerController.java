package com.binaryclan.reservationviewerservice.controller;

import com.binaryclan.reservationviewerservice.dto.ReservationViewerDTO;
import com.binaryclan.reservationviewerservice.service.ReservationViewerService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/airline_reservation/api")
public class ReservationViewerController {

    private ReservationViewerService reservationService;

    @GetMapping("/reservations")
    public List<ReservationViewerDTO> getAllReservations() {
        return reservationService.getReservations();
    }

    @GetMapping("/reservations/{id}")
    public ReservationViewerDTO getReservation(@PathVariable Integer id) {
        return reservationService.getReservation(id);
    }

    @GetMapping("/reservations/customer/{customerId}")
    public List<ReservationViewerDTO> getReservationsByCustomerId(@PathVariable Integer customerId) {
        return reservationService.getReservationsByCustomerId(customerId);
    }

    @GetMapping("/reservations/flight/{flightId}")
    public List<ReservationViewerDTO> getReservationsByFlightId(@PathVariable Integer flightId) {
        return reservationService.getReservationsByFlightId(flightId);
    }
}
