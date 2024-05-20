package com.binaryclan.flightinformationservice.service.Implementation;

import com.binaryclan.flightinformationservice.dto.FlightScheduleSeatInformationInputDto;
import com.binaryclan.flightinformationservice.dto.FlightScheduleSeatInformationOutputDto;
import com.binaryclan.flightinformationservice.mapper.FlightScheduleSeatInformationMapper;
import com.binaryclan.flightinformationservice.model.FlightSchedule;
import com.binaryclan.flightinformationservice.model.FlightScheduleSeatInformation;
import com.binaryclan.flightinformationservice.repository.FlightScheduleRepository;
import com.binaryclan.flightinformationservice.repository.FlightScheduleSeatInformationRepository;
import com.binaryclan.flightinformationservice.service.FlightScheduleSeatInformationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class FlightScheduleSeatInformationServiceImpl implements FlightScheduleSeatInformationService {

    @Autowired
    private FlightScheduleSeatInformationRepository seatInformationRepository;

    @Autowired
    private FlightScheduleRepository flightScheduleRepository;

    @Override
    public FlightScheduleSeatInformationOutputDto addSeatInformation(FlightScheduleSeatInformationInputDto inputDto) {
        FlightSchedule flightSchedule = flightScheduleRepository.findById(inputDto.getFlightScheduleId())
                .orElseThrow(() -> new RuntimeException("Flight Schedule not found"));

        FlightScheduleSeatInformation seatInformation = FlightScheduleSeatInformationMapper.mapToFlightScheduleSeatInformation(inputDto, flightSchedule);
        FlightScheduleSeatInformation savedSeatInformation = seatInformationRepository.save(seatInformation);

        return FlightScheduleSeatInformationMapper.mapToFlightScheduleSeatInformationOutputDto(savedSeatInformation);
    }

    @Override
    public FlightScheduleSeatInformationOutputDto getSeatInformationById(Long id) {
        FlightScheduleSeatInformation seatInformation = seatInformationRepository
                .findById(id)
                .orElseThrow(() -> new RuntimeException("Seat information does not exist!"));
        return FlightScheduleSeatInformationMapper.mapToFlightScheduleSeatInformationOutputDto(seatInformation);
    }

    @Override
    public List<FlightScheduleSeatInformationOutputDto> getAllSeatInformation() {
        return seatInformationRepository.findAll().stream()
                .map(FlightScheduleSeatInformationMapper::mapToFlightScheduleSeatInformationOutputDto)
                .collect(Collectors.toList());
    }

    @Override
    public FlightScheduleSeatInformationOutputDto updateSeatInformation(Long id, FlightScheduleSeatInformationInputDto inputDto) {
        FlightScheduleSeatInformation seatInformation = seatInformationRepository
                .findById(id)
                .orElseThrow(() -> new RuntimeException("Seat information does not exist!"));

        FlightSchedule flightSchedule = flightScheduleRepository.findById(inputDto.getFlightScheduleId())
                .orElseThrow(() -> new RuntimeException("Flight Schedule not found"));

        seatInformation.setSeatType(inputDto.getSeatType());
        seatInformation.setBookingStatus(inputDto.getBookingStatus());
        seatInformation.setFlightSchedule(flightSchedule);

        FlightScheduleSeatInformation updatedSeatInformation = seatInformationRepository.save(seatInformation);
        return FlightScheduleSeatInformationMapper.mapToFlightScheduleSeatInformationOutputDto(updatedSeatInformation);
    }

    @Override
    public void deleteSeatInformation(Long id) {
        FlightScheduleSeatInformation seatInformation = seatInformationRepository
                .findById(id)
                .orElseThrow(() -> new RuntimeException("Seat information does not exist!"));
        seatInformationRepository.deleteById(id);
    }
}
