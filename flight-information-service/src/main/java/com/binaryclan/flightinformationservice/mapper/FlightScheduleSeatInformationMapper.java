//package com.binaryclan.flightinformationservice.mapper;
//
//
//import com.binaryclan.flightinformationservice.dto.FlightScheduleSeatInformationDto;
//import com.binaryclan.flightinformationservice.model.FlightScheduleSeatInformation;
//
//public class FlightScheduleSeatInformationMapper {
//
//    public static FlightScheduleSeatInformation mapToFlightScheduleSeatInformation(FlightScheduleSeatInformationDto flightScheduleSeatInformationDto) {
//        FlightScheduleSeatInformation flightScheduleSeatInformation = new FlightScheduleSeatInformation(
//                flightScheduleSeatInformationDto.getId(),
////                flightScheduleSeatInformationDto.getSeatId(),
//                flightScheduleSeatInformationDto.getSeatType(),
//                flightScheduleSeatInformationDto.getBookingStatus(),
//                flightScheduleSeatInformationDto.getFlightSchedule()
//        );
//        return flightScheduleSeatInformation;
//    }
//
//    public static FlightScheduleSeatInformationDto mapToFlightScheduleSeatInformationDto(FlightScheduleSeatInformation flightScheduleSeatInformation) {
//        FlightScheduleSeatInformationDto flightScheduleSeatInformationDto = new FlightScheduleSeatInformationDto(
//                flightScheduleSeatInformation.getId(),
////                flightScheduleSeatInformation.getSeatId(),
//                flightScheduleSeatInformation.getSeatType(),
//                flightScheduleSeatInformation.getBookingStatus(),
//                flightScheduleSeatInformation.getFlightSchedule()
//        );
//        return flightScheduleSeatInformationDto;
//    }
//}



package com.binaryclan.flightinformationservice.mapper;

import com.binaryclan.flightinformationservice.dto.FlightScheduleSeatInformationInputDto;
import com.binaryclan.flightinformationservice.dto.FlightScheduleSeatInformationOutputDto;
import com.binaryclan.flightinformationservice.model.FlightSchedule;
import com.binaryclan.flightinformationservice.model.FlightScheduleSeatInformation;

public class FlightScheduleSeatInformationMapper {

    public static FlightScheduleSeatInformation mapToFlightScheduleSeatInformation(
            FlightScheduleSeatInformationInputDto inputDto, FlightSchedule flightSchedule) {
        return new FlightScheduleSeatInformation(
                inputDto.getId(),
                inputDto.getSeatType(),
                inputDto.getBookingStatus(),
                flightSchedule
        );
    }

    public static FlightScheduleSeatInformationOutputDto mapToFlightScheduleSeatInformationOutputDto(
            FlightScheduleSeatInformation seatInformation) {
        return new FlightScheduleSeatInformationOutputDto(
                seatInformation.getId(),
                seatInformation.getSeatType(),
                seatInformation.getBookingStatus(),
                seatInformation.getFlightSchedule()
        );
    }
}
