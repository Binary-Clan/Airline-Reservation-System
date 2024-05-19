package com.binaryclan.reservationviewerservice.service;

import com.binaryclan.reservationviewerservice.dto.ReservationViewerDTO;
import com.binaryclan.reservationviewerservice.model.ReservationViewer;
import com.binaryclan.reservationviewerservice.repository.ReservationViewerRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ReservationViewerService {
    private ReservationViewerRepository reservationViewerRepository;

    public List<ReservationViewerDTO> getReservations() {
        try {
            List<ReservationViewer> reservations = this.reservationViewerRepository.findAll();
            return reservations.stream().map((reservation) -> {
                return new ReservationViewerDTO(reservation.getId(), reservation.getCustomerId(), reservation.getFlightId(), reservation.getSeatId(), reservation.getPaymentId());
            }).collect(Collectors.toList());
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public ReservationViewerDTO getReservation(Integer id) {
        try {
            ReservationViewer reservation = (ReservationViewer) this.reservationViewerRepository.findById(id).orElseThrow(() -> {
                return new RuntimeException("Reservation not found");
            });
            return new ReservationViewerDTO(reservation.getId(), reservation.getCustomerId(), reservation.getFlightId(), reservation.getSeatId(), reservation.getPaymentId());
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public List<ReservationViewerDTO> getReservationsByCustomerId(Integer customerId){
        try {
            List<ReservationViewer> reservations = this.reservationViewerRepository.findByCustomerId(customerId);
            return reservations.stream().map((reservation) -> {
                return new ReservationViewerDTO(reservation.getId(), reservation.getCustomerId(), reservation.getFlightId(), reservation.getSeatId(), reservation.getPaymentId());
            }).collect(Collectors.toList());
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public List<ReservationViewerDTO> getReservationsByFlightId(Integer flightId){
        try {
            List<ReservationViewer> reservations = this.reservationViewerRepository.findByFlightId(flightId);
            return reservations.stream().map((reservation) -> {
                return new ReservationViewerDTO(reservation.getId(), reservation.getCustomerId(), reservation.getFlightId(), reservation.getSeatId(), reservation.getPaymentId());
            }).collect(Collectors.toList());
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }


}
