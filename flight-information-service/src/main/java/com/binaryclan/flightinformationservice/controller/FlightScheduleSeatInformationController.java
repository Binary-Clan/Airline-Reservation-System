package com.binaryclan.flightinformationservice.controller;

import com.binaryclan.flightinformationservice.dto.FlightScheduleSeatInformationInputDto;
import com.binaryclan.flightinformationservice.dto.FlightScheduleSeatInformationOutputDto;
import com.binaryclan.flightinformationservice.service.FlightScheduleSeatInformationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/airline_reservation/api/seats")
public class FlightScheduleSeatInformationController {

    @Autowired
    private FlightScheduleSeatInformationService seatInformationService;

    @PostMapping
    public ResponseEntity<FlightScheduleSeatInformationOutputDto> addSeatInformation(@RequestBody FlightScheduleSeatInformationInputDto inputDto) {
        FlightScheduleSeatInformationOutputDto savedSeatInformation = seatInformationService.addSeatInformation(inputDto);
        return ResponseEntity.ok(savedSeatInformation);
    }

    @GetMapping("/{id}")
    public ResponseEntity<FlightScheduleSeatInformationOutputDto> getSeatInformationById(@PathVariable Long id) {
        FlightScheduleSeatInformationOutputDto seatInformation = seatInformationService.getSeatInformationById(id);
        return ResponseEntity.ok(seatInformation);
    }

    @GetMapping
    public ResponseEntity<List<FlightScheduleSeatInformationOutputDto>> getAllSeatInformation() {
        List<FlightScheduleSeatInformationOutputDto> seatInformationList = seatInformationService.getAllSeatInformation();
        return ResponseEntity.ok(seatInformationList);
    }

    @PutMapping("/{id}")
    public ResponseEntity<FlightScheduleSeatInformationOutputDto> updateSeatInformation(@PathVariable Long id, @RequestBody FlightScheduleSeatInformationInputDto inputDto) {
        FlightScheduleSeatInformationOutputDto updatedSeatInformation = seatInformationService.updateSeatInformation(id, inputDto);
        return ResponseEntity.ok(updatedSeatInformation);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSeatInformation(@PathVariable Long id) {
        seatInformationService.deleteSeatInformation(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/flight-schedule/{flightScheduleId}")
    public ResponseEntity<List<FlightScheduleSeatInformationOutputDto>> getSeatInformationByFlightScheduleId(@PathVariable Long flightScheduleId) {
        List<FlightScheduleSeatInformationOutputDto> seatInformationList = seatInformationService.getSeatInformationByFlightScheduleId(flightScheduleId);
        return ResponseEntity.ok(seatInformationList);
    }


//    localhost:8083/api/seats/booking-status?bookingStatus=false
    @GetMapping("/booking-status")
    public ResponseEntity<List<FlightScheduleSeatInformationOutputDto>> getSeatInformationByBookingStatus(@RequestParam Boolean bookingStatus) {
        List<FlightScheduleSeatInformationOutputDto> seatInformationList = seatInformationService.getSeatInformationByBookingStatus(bookingStatus);
        return ResponseEntity.ok(seatInformationList);
    }


//    localhost:8083/api/seats/seat-type?seatType=Economy
    @GetMapping("/seat-type")
    public ResponseEntity<List<FlightScheduleSeatInformationOutputDto>> getSeatInformationBySeatType(@RequestParam String seatType) {
        List<FlightScheduleSeatInformationOutputDto> seatInformationList = seatInformationService.getSeatInformationBySeatType(seatType);
        return ResponseEntity.ok(seatInformationList);
    }
}
