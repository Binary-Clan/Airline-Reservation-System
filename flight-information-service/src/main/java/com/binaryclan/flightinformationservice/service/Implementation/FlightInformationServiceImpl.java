package com.binaryclan.flightinformationservice.service.Implementation;

import com.binaryclan.flightinformationservice.dto.FlightInformationDto;
import com.binaryclan.flightinformationservice.model.FlightInformation;
import com.binaryclan.flightinformationservice.repository.FlightInformationRepository;
import com.binaryclan.flightinformationservice.service.FlightInformationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import static com.binaryclan.flightinformationservice.mapper.FlightInformationMapper.mapToFlightInformation;
import static com.binaryclan.flightinformationservice.mapper.FlightInformationMapper.mapToFlightInformationDto;

@Service
public class FlightInformationServiceImpl implements FlightInformationService {

    @Autowired
    FlightInformationRepository flightInformationRepository;

    @Override
    public FlightInformationDto addFlight(FlightInformationDto flightInformationDto) {
        FlightInformation flight = mapToFlightInformation(flightInformationDto);
        FlightInformation savedFlight = flightInformationRepository.save(flight);
        return mapToFlightInformationDto(savedFlight);
    }

    @Override
    public FlightInformationDto getFlightById(Long id) {
        FlightInformation flight = flightInformationRepository
                .findById(id)
                .orElseThrow(() -> new RuntimeException("Flight does not exist!"));
        return mapToFlightInformationDto(flight);
    }

    @Override
    public List<FlightInformationDto> getAllFlights() {
        List<FlightInformation> flights = flightInformationRepository.findAll();
        return flights.stream()
                .map(flight -> mapToFlightInformationDto(flight))
                .collect(Collectors.toList());
    }

    @Override
    public FlightInformationDto updateFlight(Long id, FlightInformationDto flightInformationDto) {
        FlightInformation flight = flightInformationRepository
                .findById(id)
                .orElseThrow(() -> new RuntimeException("Flight does not exist!"));

        flight.setFlightName(flightInformationDto.getFlightName());
        flight.setCapacity(flightInformationDto.getCapacity());
        flight.setFlightType(flightInformationDto.getFlightType());
        flight.setSeatType(flightInformationDto.getSeatType());
        flight.setMaximumWeightForPassenger(flightInformationDto.getMaximumWeightForPassenger());
        flight.setAirlineService(flightInformationDto.getAirlineService());

        FlightInformation updatedFlight = flightInformationRepository.save(flight);
        return mapToFlightInformationDto(updatedFlight);
    }

    @Override
    public void deleteFlight(Long id) {
        FlightInformation flight = flightInformationRepository
                .findById(id)
                .orElseThrow(() -> new RuntimeException("Flight does not exist!"));
        flightInformationRepository.deleteById(id);
    }
}
