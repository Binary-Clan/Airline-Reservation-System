package com.binaryclan.flightinformationservice.service;

import com.binaryclan.flightinformationservice.dto.FlightInformationDto;

import java.util.List;

public interface FlightInformationService {

    FlightInformationDto addFlight(FlightInformationDto flightInformationDto);

    FlightInformationDto getFlightById(Long id);

    List<FlightInformationDto> getAllFlights();

    FlightInformationDto updateFlight(Long id, FlightInformationDto flightInformationDto);

    void deleteFlight(Long id);
}
