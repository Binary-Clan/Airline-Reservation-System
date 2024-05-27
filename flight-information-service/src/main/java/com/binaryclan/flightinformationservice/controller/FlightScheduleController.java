package com.binaryclan.flightinformationservice.controller;

import com.binaryclan.flightinformationservice.dto.FlightScheduleInputDto;
import com.binaryclan.flightinformationservice.dto.FlightScheduleOutputDto;
import com.binaryclan.flightinformationservice.service.FlightScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/airline_reservation/api/flight-schedules")
public class FlightScheduleController {

    @Autowired
    private FlightScheduleService flightScheduleService;

    @PostMapping
    public ResponseEntity<FlightScheduleOutputDto> createFlightSchedule(@RequestBody FlightScheduleInputDto flightScheduleInputDto) {
        FlightScheduleOutputDto createdSchedule = flightScheduleService.addFlightSchedule(flightScheduleInputDto);
        return ResponseEntity.ok(createdSchedule);
    }

    @GetMapping("/{id}")
    public ResponseEntity<FlightScheduleOutputDto> getFlightScheduleById(@PathVariable Long id) {
        FlightScheduleOutputDto flightScheduleOutputDto = flightScheduleService.getFlightScheduleById(id);
        return ResponseEntity.ok(flightScheduleOutputDto);
    }

    @GetMapping
    public ResponseEntity<List<FlightScheduleOutputDto>> getAllFlightSchedules() {
        List<FlightScheduleOutputDto> flightSchedules = flightScheduleService.getAllFlightSchedules();
        return ResponseEntity.ok(flightSchedules);
    }

    @PutMapping("/{id}")
    public ResponseEntity<FlightScheduleOutputDto> updateFlightSchedule(
            @PathVariable Long id,
            @RequestBody FlightScheduleInputDto flightScheduleInputDto) {
        FlightScheduleOutputDto updatedSchedule = flightScheduleService.updateFlightSchedule(id, flightScheduleInputDto);
        return ResponseEntity.ok(updatedSchedule);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFlightSchedule(@PathVariable Long id) {
        flightScheduleService.deleteFlightSchedule(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/flight/{flightId}")
    public ResponseEntity<List<FlightScheduleOutputDto>> getAllFlightSchedulesByFlightId(@PathVariable Long flightId) {
        List<FlightScheduleOutputDto> flightSchedules = flightScheduleService.getAllFlightSchedulesByFlightId(flightId);
        return ResponseEntity.ok(flightSchedules);
    }
}
