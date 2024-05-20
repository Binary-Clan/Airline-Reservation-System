//package com.binaryclan.flightinformationservice.service;
//
//import com.binaryclan.flightinformationservice.dto.FlightInformationDto;
//import com.binaryclan.flightinformationservice.dto.FlightScheduleDto;
//import com.binaryclan.flightinformationservice.dto.FlightScheduleInputDto;
//import com.binaryclan.flightinformationservice.dto.FlightScheduleOutputDto;
//
//import java.util.List;
//
//public interface FlightScheduleService {
//
//    FlightScheduleDto addFlightSchedule(FlightScheduleDto flightScheduleDto);
//
//    FlightScheduleDto getFlightScheduleById(Long id);
//
//    List<FlightScheduleDto> getAllFlightSchedules();
//
//    FlightScheduleDto updateFlightSchedule(Long id, FlightScheduleDto flightScheduleDto);
//
//    void deleteFlightSchedule(Long id);
//
//    List<FlightScheduleDto> getAllFlightSchedulesByFlightId(Long flightId);
//}


package com.binaryclan.flightinformationservice.service;

import com.binaryclan.flightinformationservice.dto.FlightScheduleInputDto;
import com.binaryclan.flightinformationservice.dto.FlightScheduleOutputDto;

import java.util.List;

public interface FlightScheduleService {

    FlightScheduleOutputDto addFlightSchedule(FlightScheduleInputDto flightScheduleInputDto);

    FlightScheduleOutputDto getFlightScheduleById(Long id);

    List<FlightScheduleOutputDto> getAllFlightSchedules();

    FlightScheduleOutputDto updateFlightSchedule(Long id, FlightScheduleInputDto flightScheduleInputDto);

    void deleteFlightSchedule(Long id);

    List<FlightScheduleOutputDto> getAllFlightSchedulesByFlightId(Long flightId);
}
