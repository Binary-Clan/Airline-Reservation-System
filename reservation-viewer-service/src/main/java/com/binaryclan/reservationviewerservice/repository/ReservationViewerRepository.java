package com.binaryclan.reservationviewerservice.repository;

import com.binaryclan.reservationviewerservice.model.Reservation;
import com.binaryclan.reservationviewerservice.model.ReservationViewer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReservationViewerRepository extends JpaRepository<Reservation, Integer> {
    List<Reservation> findByCustomerId(Integer customerId);
    List<Reservation> findByFlightId(Integer flightId);
}
