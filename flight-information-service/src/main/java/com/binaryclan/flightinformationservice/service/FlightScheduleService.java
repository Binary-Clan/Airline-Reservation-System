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
