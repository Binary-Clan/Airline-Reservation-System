package com.binaryclan.reservationviewerservice.repository;

import com.binaryclan.reservationviewerservice.model.ReservationViewer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReservationViewerRepository extends JpaRepository<ReservationViewer, Integer> {
    List<ReservationViewer> findByCustomerId(Integer customerId);

    List<ReservationViewer> findByFlightId(Integer flightId);
}
