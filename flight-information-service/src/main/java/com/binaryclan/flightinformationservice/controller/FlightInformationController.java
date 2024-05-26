package com.binaryclan.flightinformationservice.controller;

import com.binaryclan.flightinformationservice.dto.FlightInformationDto;
import com.binaryclan.flightinformationservice.service.FlightInformationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/flights")
public class FlightInformationController {

    @Autowired
    private FlightInformationService flightInformationService;

    @PostMapping
    public ResponseEntity<FlightInformationDto> addFlight(@RequestBody FlightInformationDto flightInformationDto) {
        FlightInformationDto createdFlight = flightInformationService.addFlight(flightInformationDto);
        return ResponseEntity.ok(createdFlight);
    }

    @GetMapping("/{id}")
    public ResponseEntity<FlightInformationDto> getFlightById(@PathVariable Long id) {
        FlightInformationDto flightInformationDto = flightInformationService.getFlightById(id);
        return ResponseEntity.ok(flightInformationDto);
    }

    @GetMapping
    public ResponseEntity<List<FlightInformationDto>> getAllFlights() {
        List<FlightInformationDto> flights = flightInformationService.getAllFlights();
        return ResponseEntity.ok(flights);
    }

    @PutMapping("/{id}")
    public ResponseEntity<FlightInformationDto> updateFlight(
            @PathVariable Long id,
            @RequestBody FlightInformationDto flightInformationDto) {
        FlightInformationDto updatedFlight = flightInformationService.updateFlight(id, flightInformationDto);
        return ResponseEntity.ok(updatedFlight);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFlight(@PathVariable Long id) {
        flightInformationService.deleteFlight(id);
        return ResponseEntity.noContent().build();
    }
}
