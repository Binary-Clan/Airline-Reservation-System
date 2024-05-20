package com.binaryclan.flightinformationservice.service;

import com.binaryclan.flightinformationservice.dto.FlightScheduleSeatInformationInputDto;
import com.binaryclan.flightinformationservice.dto.FlightScheduleSeatInformationOutputDto;

import java.util.List;

public interface FlightScheduleSeatInformationService {
    FlightScheduleSeatInformationOutputDto addSeatInformation(FlightScheduleSeatInformationInputDto inputDto);
    FlightScheduleSeatInformationOutputDto getSeatInformationById(Long id);
    List<FlightScheduleSeatInformationOutputDto> getAllSeatInformation();
    FlightScheduleSeatInformationOutputDto updateSeatInformation(Long id, FlightScheduleSeatInformationInputDto inputDto);
    void deleteSeatInformation(Long id);
}
