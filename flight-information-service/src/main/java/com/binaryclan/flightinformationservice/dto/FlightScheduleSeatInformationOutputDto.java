package com.binaryclan.flightinformationservice.dto;

import com.binaryclan.flightinformationservice.model.FlightSchedule;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FlightScheduleSeatInformationOutputDto {
    private Long id;
    private String seatType;
    private Boolean bookingStatus;
    private FlightSchedule flightSchedule; // Full object
}
