package com.binaryclan.reservationviewerservice.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReservationDTO {
    private Integer id;
    private Integer customerId;
    private Integer scheduleId;
    private Integer flightId;
    private Integer seatId;
    private Integer paymentId;
    private LocalDate createdDate;
    private LocalTime createdAt;
}
