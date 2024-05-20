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
    private final ReservationRepository reservationRepository ;

    public ReservationService(ReservationRepository reservationRepository) {
        this.reservationRepository = reservationRepository;
    }

    public void createReservation(ReservationDTO reservationDTO) {
        try {
            Reservation reservation = new Reservation();
            reservation.setCustomerId(reservationDTO.getCustomerId());
            reservation.setFlightId(reservationDTO.getFlightId());
            reservation.setSeatId(reservationDTO.getSeatId());
            reservation.setPaymentId(reservationDTO.getPaymentId());
            this.reservationRepository.save(reservation);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public List<ReservationDTO> getReservations() {
        try {
            List<Reservation> reservations = this.reservationRepository.findAll();
            return reservations.stream().map((reservation) -> {
                return new ReservationDTO(reservation.getId(), reservation.getCustomerId(), reservation.getFlightId(), reservation.getSeatId(), reservation.getPaymentId(), reservation.getCreatedDate(), reservation.getCreatedAt());
            }).collect(Collectors.toList());
        }
        catch (Exception e) {
            e.printStackTrace();
            return null;
        }

    }

    public ReservationDTO getReservation(Integer id) {
        try {
            Reservation reservation = (Reservation)this.reservationRepository.findById(id).orElseThrow(() -> {
                return new RuntimeException("Reservation not found");
            });
            return new ReservationDTO(reservation.getId(), reservation.getCustomerId(), reservation.getFlightId(), reservation.getSeatId(), reservation.getPaymentId(),reservation.getCreatedDate(), reservation.getCreatedAt());
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public void deleteReservation(Integer id) {
        try{
            this.reservationRepository.deleteById(id);
        }catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void updateReservation(Integer id, ReservationDTO reservationDTO) {
        try{
            Reservation reservation = (Reservation)this.reservationRepository.findById(id).orElseThrow(() -> {
                return new RuntimeException("Reservation not found");
            });
            reservation.setCustomerId(reservationDTO.getCustomerId());
            reservation.setFlightId(reservationDTO.getFlightId());
            reservation.setSeatId(reservationDTO.getSeatId());
            reservation.setPaymentId(reservationDTO.getPaymentId());
            this.reservationRepository.save(reservation);
        }catch (Exception e) {
            e.printStackTrace();
        }

    }
}
