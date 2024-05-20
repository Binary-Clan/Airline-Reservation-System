//package com.binaryclan.flightinformationservice.mapper;
//
//
//import com.binaryclan.flightinformationservice.dto.FlightScheduleDto;
//import com.binaryclan.flightinformationservice.model.FlightSchedule;
//
//public class FlightScheduleMapper {
//
//    public static FlightSchedule mapToFlightSchedule(FlightScheduleDto flightScheduleDto) {
//        FlightSchedule flightSchedule = new FlightSchedule(
//                flightScheduleDto.getId(),
//                flightScheduleDto.getStatus(),
//                flightScheduleDto.getDate(),
//                flightScheduleDto.getDepartureTime(),
//                flightScheduleDto.getArrivalTime(),
//                flightScheduleDto.getStartAirport(),
//                flightScheduleDto.getEndAirport(),
//                flightScheduleDto.getFlightInformation()
//        );
//        return flightSchedule;
//    }
//
//    public static FlightScheduleDto mapToFlightScheduleDto(FlightSchedule flightSchedule) {
//        FlightScheduleDto flightScheduleDto = new FlightScheduleDto(
//                flightSchedule.getId(),
//                flightSchedule.getStatus(),
//                flightSchedule.getDate(),
//                flightSchedule.getDepartureTime(),
//                flightSchedule.getArrivalTime(),
//                flightSchedule.getStartAirport(),
//                flightSchedule.getEndAirport(),
//                flightSchedule.getFlightInformation()
//        );
//        return flightScheduleDto;
//    }
//}
//



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
                flightScheduleInputDto.getDate(),
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
                flightSchedule.getDate(),
                flightSchedule.getDepartureTime(),
                flightSchedule.getArrivalTime(),
                flightSchedule.getStartAirport(),
                flightSchedule.getEndAirport(),
                flightSchedule.getFlightInformation()
        );
    }
}
