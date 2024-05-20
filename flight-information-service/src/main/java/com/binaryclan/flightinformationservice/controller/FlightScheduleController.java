package com.binaryclan.flightinformationservice.controller;


import com.binaryclan.flightinformationservice.dto.FlightScheduleDto;
import com.binaryclan.flightinformationservice.service.FlightScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/flight-schedules")
public class FlightScheduleController {

    @Autowired
    private FlightScheduleService flightScheduleService;

    @PostMapping("/add")
    public ResponseEntity<FlightScheduleDto> createFlightSchedule(@RequestBody FlightScheduleDto flightScheduleDto) {
        FlightScheduleDto createdSchedule = flightScheduleService.addFlightSchedule(flightScheduleDto);
        return ResponseEntity.ok(createdSchedule);
    }

    @GetMapping("/{id}")
    public ResponseEntity<FlightScheduleDto> getFlightScheduleById(@PathVariable Long id) {
        FlightScheduleDto flightScheduleDto = flightScheduleService.getFlightScheduleById(id);
        return ResponseEntity.ok(flightScheduleDto);
    }

    @GetMapping("/all")
    public ResponseEntity<List<FlightScheduleDto>> getAllFlightSchedules() {
        List<FlightScheduleDto> flightSchedules = flightScheduleService.getAllFlightSchedules();
        return ResponseEntity.ok(flightSchedules);
    }

    @PutMapping("/{id}")
    public ResponseEntity<FlightScheduleDto> updateFlightSchedule(
            @PathVariable Long id,
            @RequestBody FlightScheduleDto flightScheduleDto) {
        FlightScheduleDto updatedSchedule = flightScheduleService.updateFlightSchedule(id, flightScheduleDto);
        return ResponseEntity.ok(updatedSchedule);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFlightSchedule(@PathVariable Long id) {
        flightScheduleService.deleteFlightSchedule(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/flight/{flightId}")
    public ResponseEntity<List<FlightScheduleDto>> getAllFlightSchedulesByFlightId(@PathVariable Long flightId) {
        List<FlightScheduleDto> flightSchedules = flightScheduleService.getAllFlightSchedulesByFlightId(flightId);
        return ResponseEntity.ok(flightSchedules);
    }
}