package com.binaryclan.reservationservice.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReservationDTO {
    private Integer id;
    private Integer customerId;
    private Integer flightId;
    private Integer seatId;
    private Integer paymentId;
}
