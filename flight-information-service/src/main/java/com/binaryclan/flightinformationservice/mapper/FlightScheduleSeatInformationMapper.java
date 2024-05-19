package com.binaryclan.flightinformationservice.mapper;


import com.binaryclan.flightinformationservice.dto.FlightScheduleSeatInformationDto;
import com.binaryclan.flightinformationservice.model.FlightSchedule;
import com.binaryclan.flightinformationservice.model.FlightScheduleSeatInformation;

public class FlightScheduleSeatInformationMapper {

    public static FlightScheduleSeatInformation mapToFlightScheduleSeatInformation(FlightScheduleSeatInformationDto flightScheduleSeatInformationDto) {
        FlightScheduleSeatInformation flightScheduleSeatInformation = new FlightScheduleSeatInformation(
                flightScheduleSeatInformationDto.getId(),
                flightScheduleSeatInformationDto.getSeatId(),
                flightScheduleSeatInformationDto.getBookingStatus(),
                flightScheduleSeatInformationDto.getFlightShedule()
        );
        return flightScheduleSeatInformation;
    }

    public static FlightScheduleSeatInformationDto mapToFlightScheduleSeatInformationDto(FlightScheduleSeatInformation flightScheduleSeatInformation) {
        FlightScheduleSeatInformationDto flightScheduleSeatInformationDto = new FlightScheduleSeatInformationDto(
                flightScheduleSeatInformation.getId(),
                flightScheduleSeatInformation.getSeatId(),
                flightScheduleSeatInformation.getBookingStatus(),
                flightScheduleSeatInformation.getFlightShedule()
        );
        return flightScheduleSeatInformationDto;
    }
}
