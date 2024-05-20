package com.binaryclan.flightinformationservice.service.Implementation;

import com.binaryclan.flightinformationservice.dto.FlightScheduleDto;
import com.binaryclan.flightinformationservice.model.FlightSchedule;
import com.binaryclan.flightinformationservice.repository.FlightScheduleRepository;
import com.binaryclan.flightinformationservice.service.FlightScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import static com.binaryclan.flightinformationservice.mapper.FlightScheduleMapper.*;

@Service
public class FlightScheduleServiceImpl implements FlightScheduleService {

    @Autowired
    FlightScheduleRepository flightScheduleRepository;


    @Override
    public FlightScheduleDto addFlightSchedule(FlightScheduleDto flightScheduleDto) {
        FlightSchedule flightSchedule = mapToFlightSchedule(flightScheduleDto);
        FlightSchedule savedFlightSchedule = flightScheduleRepository.save(flightSchedule);
        return mapToFlightScheduleDto(savedFlightSchedule);
    }

    @Override
    public FlightScheduleDto getFlightScheduleById(Long id) {
        FlightSchedule flightSchedule = flightScheduleRepository
                .findById(id)
                .orElseThrow(() -> new RuntimeException("Flight schedule does not exist!"));
        return mapToFlightScheduleDto(flightSchedule);
    }

    @Override
    public List<FlightScheduleDto> getAllFlightSchedules() {
        List<FlightSchedule> flightSchedules = flightScheduleRepository.findAll();
        return flightSchedules.stream()
                .map(flightSchedule -> mapToFlightScheduleDto(flightSchedule))
                .collect(Collectors.toList());
    }

    @Override
    public FlightScheduleDto updateFlightSchedule(Long id, FlightScheduleDto flightScheduleDto) {
        FlightSchedule flightSchedule = flightScheduleRepository
                .findById(id)
                .orElseThrow(() -> new RuntimeException("Flight schedule does not exist!"));

        flightSchedule.setStatus(flightScheduleDto.getStatus());
        flightSchedule.setDate(flightScheduleDto.getDate());
        flightSchedule.setDepartureTime(flightScheduleDto.getDepartureTime());
        flightSchedule.setArrivalTime(flightScheduleDto.getArrivalTime());
        flightSchedule.setStartAirport(flightScheduleDto.getStartAirport());
        flightSchedule.setEndAirport(flightScheduleDto.getEndAirport());
        flightSchedule.setFlightInformation(flightScheduleDto.getFlightInformation());

        FlightSchedule updatedFlightSchedule = flightScheduleRepository.save(flightSchedule);
        return mapToFlightScheduleDto(updatedFlightSchedule);
    }

    @Override
    public void deleteFlightSchedule(Long id) {
        FlightSchedule flightSchedule = flightScheduleRepository
                .findById(id)
                .orElseThrow(() -> new RuntimeException("Flight schedule does not exist!"));
        flightScheduleRepository.deleteById(id);
    }

    @Override
    public List<FlightScheduleDto> getAllFlightSchedulesByFlightId(Long flightId) {
        List<FlightSchedule> flightSchedules = flightScheduleRepository.findByFlightInformationId(flightId);
        return flightSchedules.stream()
                .map(flightSchedule -> mapToFlightScheduleDto(flightSchedule))
                .collect(Collectors.toList());
    }
}
