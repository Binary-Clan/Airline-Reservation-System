package com.binaryclan.flightinformationservice.mapper;


import com.binaryclan.flightinformationservice.dto.FlightScheduleDto;
import com.binaryclan.flightinformationservice.model.FlightSchedule;

public class FlightScheduleMapper {

    public static FlightSchedule mapToFlightSchedule(FlightScheduleDto flightScheduleDto) {
        FlightSchedule flightSchedule = new FlightSchedule(
                flightScheduleDto.getId(),
                flightScheduleDto.getStatus(),
                flightScheduleDto.getDate(),
                flightScheduleDto.getDepartureTime(),
                flightScheduleDto.getArrivalTime(),
                flightScheduleDto.getStartAirport(),
                flightScheduleDto.getEndAirport(),
                flightScheduleDto.getFlightInformation()
        );
        return flightSchedule;
    }

    public static FlightScheduleDto mapToFlightScheduleDto(FlightSchedule flightSchedule) {
        FlightScheduleDto flightScheduleDto = new FlightScheduleDto(
                flightSchedule.getId(),
                flightSchedule.getStatus(),
                flightSchedule.getDate(),
                flightSchedule.getDepartureTime(),
                flightSchedule.getArrivalTime(),
                flightSchedule.getStartAirport(),
                flightSchedule.getEndAirport(),
                flightSchedule.getFlightInformation()
        );
        return flightScheduleDto;
    }
}
