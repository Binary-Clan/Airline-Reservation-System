package com.binaryclan.flightinformationservice.service;

import com.binaryclan.flightinformationservice.dto.FlightInformationDto;
import com.binaryclan.flightinformationservice.model.FlightInformation;
import org.springframework.stereotype.Service;

import java.util.List;

public interface FlightInformationService {

    FlightInformationDto addFlight(FlightInformationDto flightInformationDto);

    FlightInformationDto getFlightById(Long id);

    List<FlightInformationDto> getAllFlights();

    FlightInformationDto updateFlight(Long id, FlightInformationDto flightInformationDto);

    void deleteFlight(Long id);
}
