package com.binaryclan.flightinformationservice.service;

import com.binaryclan.flightinformationservice.dto.FlightInformationDto;
import com.binaryclan.flightinformationservice.dto.FlightScheduleDto;

import java.util.List;

public interface FlightScheduleService {

    FlightScheduleDto addFlightSchedule(FlightScheduleDto flightScheduleDto);

    FlightScheduleDto getFlightScheduleById(Long id);

    List<FlightScheduleDto> getAllFlightSchedules();

    FlightScheduleDto updateFlightSchedule(Long id, FlightScheduleDto flightScheduleDto);

    void deleteFlightSchedule(Long id);

    List<FlightScheduleDto> getAllFlightSchedulesByFlightId(Long flightId);
}
