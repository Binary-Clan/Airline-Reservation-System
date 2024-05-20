//package com.binaryclan.flightinformationservice.dto;
//
//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//
//import java.time.LocalDate;
//import java.time.LocalTime;
//
//@Data
//@AllArgsConstructor
//@NoArgsConstructor
//public class FlightScheduleOutputDto {
//    private Long id;
//    private String status;
//    private LocalDate date;
//    private LocalTime departureTime;
//    private LocalTime arrivalTime;
//    private String startAirport;
//    private String endAirport;
//    private FlightInformationDto flightInformation; // Complete FlightInformation object
//}
//


package com.binaryclan.flightinformationservice.dto;

import com.binaryclan.flightinformationservice.model.FlightInformation;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FlightScheduleOutputDto {
    private Long id;
    private String status;
    private LocalDate date;
    private LocalTime departureTime;
    private LocalTime arrivalTime;
    private String startAirport;
    private String endAirport;
    private FlightInformation flightInformation;
}
