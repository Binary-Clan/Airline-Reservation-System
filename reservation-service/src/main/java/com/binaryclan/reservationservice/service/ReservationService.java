package com.binaryclan.reservationservice.service;

import com.binaryclan.reservationservice.controller.ResponseEntity;
import com.binaryclan.reservationservice.dto.ReservationDTO;
import com.binaryclan.reservationservice.model.Reservation;
import com.binaryclan.reservationservice.repository.ReservationRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ReservationService {
    private ReservationRepository reservationRepository;

//    public ReservationService(ReservationRepository reservationRepository) {
//        this.reservationRepository = reservationRepository;
//    }

    public void createReservation(ReservationDTO reservationDTO) {
        Reservation reservation = new Reservation();
        reservation.setCustomerId(reservationDTO.getCustomerId());
        reservation.setFlightId(reservationDTO.getFlightId());
        reservation.setSeatId(reservationDTO.getSeatId());
        reservation.setPaymentId(reservationDTO.getPaymentId());
        this.reservationRepository.save(reservation);
    }

    public List<ReservationDTO> getReservations() {
        List<Reservation> reservations = this.reservationRepository.findAll();
        return reservations.stream().map((reservation) -> {
            return new ReservationDTO(reservation.getId(), reservation.getCustomerId(), reservation.getFlightId(), reservation.getSeatId(), reservation.getPaymentId());
        }).collect(Collectors.toList());
    }

    public ReservationDTO getReservation(Integer id) {
        Reservation reservation = (Reservation)this.reservationRepository.findById(id).orElseThrow(() -> {
            return new RuntimeException("Reservation not found");
        });
        return new ReservationDTO(reservation.getId(), reservation.getCustomerId(), reservation.getFlightId(), reservation.getSeatId(), reservation.getPaymentId());
    }

    public void deleteReservation(Integer id) {
        this.reservationRepository.deleteById(id);
    }

    public void updateReservation(Integer id, ReservationDTO reservationDTO) {
        Reservation reservation = (Reservation)this.reservationRepository.findById(id).orElseThrow(() -> {
            return new RuntimeException("Reservation not found");
        });
        reservation.setCustomerId(reservationDTO.getCustomerId());
        reservation.setFlightId(reservationDTO.getFlightId());
        reservation.setSeatId(reservationDTO.getSeatId());
        reservation.setPaymentId(reservationDTO.getPaymentId());
        this.reservationRepository.save(reservation);
    }
}
