package com.binaryclan.flightinformationservice.mapper;

import com.binaryclan.flightinformationservice.dto.FlightScheduleInputDto;
import com.binaryclan.flightinformationservice.dto.FlightScheduleOutputDto;
import com.binaryclan.flightinformationservice.model.FlightInformation;
import com.binaryclan.flightinformationservice.model.FlightSchedule;
import com.binaryclan.flightinformationservice.repository.FlightInformationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class FlightScheduleMapper {

    @Autowired
    private FlightInformationRepository flightInformationRepository;

    public FlightSchedule mapToFlightSchedule(FlightScheduleInputDto flightScheduleInputDto) {
        FlightInformation flightInformation = flightInformationRepository.findById(flightScheduleInputDto.getFlightInformationId())
                .orElseThrow(() -> new RuntimeException("Flight information does not exist!"));

        return new FlightSchedule(
                flightScheduleInputDto.getId(),
                flightScheduleInputDto.getStatus(),
                flightScheduleInputDto.getArrivalDate(),
                flightScheduleInputDto.getDepartureDate(),
                flightScheduleInputDto.getDepartureTime(),
                flightScheduleInputDto.getArrivalTime(),
                flightScheduleInputDto.getStartAirport(),
                flightScheduleInputDto.getEndAirport(),
                flightInformation
        );
    }

    public static FlightScheduleOutputDto mapToFlightScheduleOutputDto(FlightSchedule flightSchedule) {
        return new FlightScheduleOutputDto(
                flightSchedule.getId(),
                flightSchedule.getStatus(),
                flightSchedule.getArrivalDate(),
                flightSchedule.getDepartureDate(),
                flightSchedule.getDepartureTime(),
                flightSchedule.getArrivalTime(),
                flightSchedule.getStartAirport(),
                flightSchedule.getEndAirport(),
                flightSchedule.getFlightInformation()
        );
    }
}
