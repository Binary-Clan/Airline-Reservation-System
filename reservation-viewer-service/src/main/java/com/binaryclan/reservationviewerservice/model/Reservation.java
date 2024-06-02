package com.binaryclan.reservationviewerservice.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer customerId;
    private Integer scheduleId;
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
