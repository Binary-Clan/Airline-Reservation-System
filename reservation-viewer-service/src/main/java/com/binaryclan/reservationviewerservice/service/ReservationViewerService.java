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

    public List<ReservationDTO> getReservations() {
        try {
            List<Reservation> reservations = this.reservationViewerRepository.findAll();
            return reservations.stream().map((reservation) -> {
                return new ReservationDTO(reservation.getId(), reservation.getCustomerId(), reservation.getFlightId(), reservation.getSeatId(), reservation.getPaymentId(), reservation.getCreatedDate(), reservation.getCreatedAt());
            }).collect(Collectors.toList());
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public ReservationDTO getReservation(Integer id) {
        try {
            Reservation reservation = (Reservation)this.reservationViewerRepository.findById(id).orElseThrow(() -> {
                return new RuntimeException("Reservation not found");
            });
            return new ReservationDTO(reservation.getId(), reservation.getCustomerId(), reservation.getFlightId(), reservation.getSeatId(), reservation.getPaymentId(),reservation.getCreatedDate(), reservation.getCreatedAt());
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }


    public List<ReservationDTO> getReservationsByCustomerId(Integer customerId){
        try {
            List<Reservation> reservations = this.reservationViewerRepository.findByCustomerId(customerId);
            return reservations.stream().map((reservation) -> {
                return new ReservationDTO(reservation.getId(), reservation.getCustomerId(), reservation.getFlightId(), reservation.getSeatId(), reservation.getPaymentId(), reservation.getCreatedDate(), reservation.getCreatedAt());
            }).collect(Collectors.toList());
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public List<ReservationDTO> getReservationsByFlightId(Integer flightId){
        try {
            List<Reservation> reservations = this.reservationViewerRepository.findByFlightId(flightId);
            return reservations.stream().map((reservation) -> {
                return new ReservationDTO(reservation.getId(), reservation.getCustomerId(), reservation.getFlightId(), reservation.getSeatId(), reservation.getPaymentId(), reservation.getCreatedDate(), reservation.getCreatedAt());
            }).collect(Collectors.toList());
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }


    public void createReservation(ReservationDTO reservationDTO) {
        try {
            Reservation reservation = new Reservation();
            reservation.setCustomerId(reservationDTO.getCustomerId());
            reservation.setFlightId(reservationDTO.getFlightId());
            reservation.setSeatId(reservationDTO.getSeatId());
            reservation.setPaymentId(reservationDTO.getPaymentId());
            this.reservationViewerRepository.save(reservation);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


    public void deleteReservation(Integer id) {
        try{
            this.reservationViewerRepository.deleteById(id);
        }catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void updateReservation(Integer id, ReservationDTO reservationDTO) {
        try{
            Reservation reservation = (Reservation)this.reservationViewerRepository.findById(id).orElseThrow(() -> {
                return new RuntimeException("Reservation not found");
            });
            reservation.setCustomerId(reservationDTO.getCustomerId());
            reservation.setFlightId(reservationDTO.getFlightId());
            reservation.setSeatId(reservationDTO.getSeatId());
            reservation.setPaymentId(reservationDTO.getPaymentId());
            this.reservationViewerRepository.save(reservation);
        }catch (Exception e) {
            e.printStackTrace();
        }

    }


}
