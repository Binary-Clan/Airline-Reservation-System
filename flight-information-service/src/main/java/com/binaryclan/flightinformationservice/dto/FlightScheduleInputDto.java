package com.binaryclan.flightinformationservice.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FlightScheduleInputDto {
    private Long id;
    private String status;
    private LocalDate arrivalDate;
    private LocalDate departureDate;
    private LocalTime departureTime;
    private LocalTime arrivalTime;
    private String startAirport;
    private String endAirport;
    private Long flightInformationId;
}

