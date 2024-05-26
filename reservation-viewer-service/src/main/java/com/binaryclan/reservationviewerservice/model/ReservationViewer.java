package com.binaryclan.reservationviewerservice.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ReservationViewer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer customerId;
    private Integer flightId;
    private Integer seatId;
    private Integer paymentId;
    @Column(updatable = false)
    private LocalDate createdDate;
    private LocalTime createdAt;
    @PrePersist
    protected void onCreate() {
        this.createdDate = LocalDate.now();
        this.createdAt = LocalTime.now().withNano(0);
    }
}
