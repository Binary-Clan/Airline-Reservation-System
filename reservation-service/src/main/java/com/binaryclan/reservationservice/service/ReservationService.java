package com.binaryclan.reservationservice.service;

import com.binaryclan.reservationservice.dto.ReservationDTO;
import com.binaryclan.reservationservice.model.Reservation;
import com.binaryclan.reservationservice.repository.ReservationRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ReservationService {
    private final ReservationRepository reservationRepository ;

    public ReservationService(ReservationRepository reservationRepository) {
        this.reservationRepository = reservationRepository;
    }

    public ResponseEntity<ReservationDTO> createReservation(ReservationDTO reservationDTO) {
        try {
            Reservation reservation = new Reservation();
            reservation.setCustomerId(reservationDTO.getCustomerId());
            reservation.setScheduleId(reservationDTO.getScheduleId());
            reservation.setFlightId(reservationDTO.getFlightId());
            reservation.setSeatId(reservationDTO.getSeatId());
            reservation.setPaymentId(reservationDTO.getPaymentId());
            Reservation savedItem = this.reservationRepository.save(reservation);
            return ResponseEntity.ok(new ReservationDTO(savedItem.getId(),
                    savedItem.getCustomerId(), savedItem.getScheduleId(),savedItem.getFlightId(),
                    savedItem.getSeatId(), savedItem.getPaymentId(),
                    savedItem.getCreatedDate(), savedItem.getCreatedAt()));

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    public ResponseEntity<List<ReservationDTO>> getReservations() {
        try {
            List<Reservation> reservations = this.reservationRepository.findAll();
            return ResponseEntity.ok(reservations.stream().map((reservation) -> {
                return new ReservationDTO(reservation.getId(), reservation.getCustomerId(), reservation.getScheduleId(), reservation.getFlightId(), reservation.getSeatId(), reservation.getPaymentId(), reservation.getCreatedDate(), reservation.getCreatedAt());
            }).collect(Collectors.toList()));
        }
        catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }

    }

    public ResponseEntity<ReservationDTO> getReservation(Integer id) {
        try {
            Reservation reservation = (Reservation)this.reservationRepository.findById(id).orElseThrow(() -> {
                return new RuntimeException("Reservation not found");
            });
            return ResponseEntity.ok(new ReservationDTO(
                    reservation.getId(), reservation.getCustomerId(),
                    reservation.getScheduleId(),
                    reservation.getFlightId(), reservation.getSeatId(),
                    reservation.getPaymentId(), reservation.getCreatedDate(),
                    reservation.getCreatedAt()));
//            return new ReservationDTO(reservation.getId(), reservation.getCustomerId(), reservation.getFlightId(), reservation.getSeatId(), reservation.getPaymentId(),reservation.getCreatedDate(), reservation.getCreatedAt());
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    public ResponseEntity<String> deleteReservation(Integer id) {
        try{
            this.reservationRepository.deleteById(id);
            return ResponseEntity.status(HttpStatus.OK).body("Reservation deleted successfully");
        }catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    public ResponseEntity<ReservationDTO> updateReservation(Integer id, ReservationDTO reservationDTO) {
        try{
            return this.reservationRepository.findById(id)
                    .map(reservation -> {
                        reservation.setCustomerId(reservationDTO.getCustomerId());
                        reservation.setFlightId(reservationDTO.getFlightId());
                        reservation.setScheduleId(reservationDTO.getScheduleId());
                        reservation.setSeatId(reservationDTO.getSeatId());
                        reservation.setPaymentId(reservationDTO.getPaymentId());
                        Reservation savedItem = this.reservationRepository.save(reservation);
                        return ResponseEntity.ok(new ReservationDTO(savedItem.getId(),
                                savedItem.getCustomerId(), savedItem.getScheduleId(),
                                savedItem.getFlightId(),
                                savedItem.getSeatId(), savedItem.getPaymentId(),
                                savedItem.getCreatedDate(), savedItem.getCreatedAt()));
                    })
                    .orElseGet(() -> {
                        return ResponseEntity.notFound().build();
                    });
        }catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
