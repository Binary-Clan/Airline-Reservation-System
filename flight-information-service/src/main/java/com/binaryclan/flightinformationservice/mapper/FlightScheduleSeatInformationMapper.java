package com.binaryclan.flightinformationservice.mapper;

import com.binaryclan.flightinformationservice.dto.FlightScheduleSeatInformationInputDto;
import com.binaryclan.flightinformationservice.dto.FlightScheduleSeatInformationOutputDto;
import com.binaryclan.flightinformationservice.model.FlightSchedule;
import com.binaryclan.flightinformationservice.model.FlightScheduleSeatInformation;

public class FlightScheduleSeatInformationMapper {

    public static FlightScheduleSeatInformation mapToFlightScheduleSeatInformation(FlightScheduleSeatInformationInputDto inputDto, FlightSchedule flightSchedule) {
        FlightScheduleSeatInformation seatInformation = new FlightScheduleSeatInformation();
        seatInformation.setId(inputDto.getId());
        seatInformation.setSeatType(inputDto.getSeatType());
        seatInformation.setBookingStatus(inputDto.getBookingStatus());
        seatInformation.setFlightSchedule(flightSchedule);
        return seatInformation;
    }

    public static FlightScheduleSeatInformationOutputDto mapToFlightScheduleSeatInformationOutputDto(FlightScheduleSeatInformation seatInformation) {
        return new FlightScheduleSeatInformationOutputDto(
                seatInformation.getId(),
                seatInformation.getSeatType(),
                seatInformation.getBookingStatus(),
                seatInformation.getFlightSchedule()
        );
    }
}
