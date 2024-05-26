package com.binaryclan.flightinformationservice.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FlightInformationDto {
    private Long id;
    private String flightName;
    private int capacity;
    private String flightType;
    private String seatType;
    private double maximumWeightForPassenger;
    private String airlineService;
}
