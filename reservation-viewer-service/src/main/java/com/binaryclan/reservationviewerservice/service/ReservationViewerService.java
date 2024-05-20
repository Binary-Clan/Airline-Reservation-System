package com.binaryclan.reservationviewerservice.service;

import com.binaryclan.reservationviewerservice.dto.ReservationDTO;
import com.binaryclan.reservationviewerservice.dto.ReservationViewerDTO;
import com.binaryclan.reservationviewerservice.model.Reservation;
import com.binaryclan.reservationviewerservice.model.ReservationViewer;
import com.binaryclan.reservationviewerservice.repository.ReservationViewerRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ReservationViewerService {
    private final ReservationViewerRepository reservationViewerRepository;

    public ReservationViewerService(ReservationViewerRepository reservationViewerRepository) {
        this.reservationViewerRepository = reservationViewerRepository;
    }

    public List<ReservationViewerDTO> getReservations() {
        try {
            List<Reservation> reservations = this.reservationViewerRepository.findAll();
            return reservations.stream().map((reservation) -> {
                return new ReservationViewerDTO(reservation.getId(), reservation.getCustomerId(), reservation.getFlightId(), reservation.getSeatId(), reservation.getPaymentId(), reservation.getCreatedDate(), reservation.getCreatedAt());
            }).collect(Collectors.toList());
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public ReservationDTO getReservation(Integer id) {
        try {
            Reservation reservation = this.reservationViewerRepository.findById(id).orElseThrow(() -> {
                return new RuntimeException("Reservation not found");
            });
            return new ReservationDTO(reservation.getId(), reservation.getCustomerId(), reservation.getFlightId(), reservation.getSeatId(), reservation.getPaymentId(), reservation.getCreatedDate(), reservation.getCreatedAt());
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public List<ReservationViewerDTO> getReservationsByCustomerId(Integer customerId){
        try {
            List<Reservation> reservations = this.reservationViewerRepository.findByCustomerId(customerId);
            return reservations.stream().map((reservation) -> {
                return new ReservationViewerDTO(reservation.getId(), reservation.getCustomerId(), reservation.getFlightId(), reservation.getSeatId(), reservation.getPaymentId(), reservation.getCreatedDate(), reservation.getCreatedAt());
            }).collect(Collectors.toList());
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public List<ReservationViewerDTO> getReservationsByFlightId(Integer flightId){
        try {
            List<Reservation> reservations = this.reservationViewerRepository.findByFlightId(flightId);
            return reservations.stream().map((reservation) -> {
                return new ReservationViewerDTO(reservation.getId(), reservation.getCustomerId(), reservation.getFlightId(), reservation.getSeatId(), reservation.getPaymentId(), reservation.getCreatedDate(), reservation.getCreatedAt());
            }).collect(Collectors.toList());
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }


}
