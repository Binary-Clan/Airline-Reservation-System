//package com.binaryclan.flightinformationservice.controller;
//
//import com.binaryclan.flightinformationservice.dto.FlightScheduleSeatInformationDto;
//import com.binaryclan.flightinformationservice.service.FlightScheduleSeatInformationService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/seats")
//public class FlightScheduleSeatInformationController {
//
//    @Autowired
//    private FlightScheduleSeatInformationService seatInformationService;
//
//    @PostMapping("/add")
//    public ResponseEntity<FlightScheduleSeatInformationDto> addSeatInformation(@RequestBody FlightScheduleSeatInformationDto seatInformationDto) {
//        FlightScheduleSeatInformationDto savedSeatInformation = seatInformationService.addSeatInformation(seatInformationDto);
//        return ResponseEntity.ok(savedSeatInformation);
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<FlightScheduleSeatInformationDto> getSeatInformationById(@PathVariable Long id) {
//        FlightScheduleSeatInformationDto seatInformation = seatInformationService.getSeatInformationById(id);
//        return ResponseEntity.ok(seatInformation);
//    }
//
//    @GetMapping("/all")
//    public ResponseEntity<List<FlightScheduleSeatInformationDto>> getAllSeatInformation() {
//        List<FlightScheduleSeatInformationDto> seatInformationList = seatInformationService.getAllSeatInformation();
//        return ResponseEntity.ok(seatInformationList);
//    }
//
//    @GetMapping("/flight-schedule/{flightScheduleId}")
//    public ResponseEntity<List<FlightScheduleSeatInformationDto>> getSeatInformationByFlightScheduleId(@PathVariable Long flightScheduleId) {
//        List<FlightScheduleSeatInformationDto> seatInformationList = seatInformationService.getSeatInformationByFlightScheduleId(flightScheduleId);
//        return ResponseEntity.ok(seatInformationList);
//    }
//
//    @PutMapping("/{id}")
//    public ResponseEntity<FlightScheduleSeatInformationDto> updateSeatInformation(@PathVariable Long id, @RequestBody FlightScheduleSeatInformationDto seatInformationDto) {
//        FlightScheduleSeatInformationDto updatedSeatInformation = seatInformationService.updateSeatInformation(id, seatInformationDto);
//        return ResponseEntity.ok(updatedSeatInformation);
//    }
//
//    @DeleteMapping("/{id}")
//    public ResponseEntity<Void> deleteSeatInformation(@PathVariable Long id) {
//        seatInformationService.deleteSeatInformation(id);
//        return ResponseEntity.noContent().build();
//    }
//
//    @GetMapping("/booking-status")
//    public ResponseEntity<List<FlightScheduleSeatInformationDto>> getSeatInformationByBookingStatus(@RequestParam Boolean bookingStatus) {
//        List<FlightScheduleSeatInformationDto> seatInformationList = seatInformationService.getSeatInformationByBookingStatus(bookingStatus);
//        return ResponseEntity.ok(seatInformationList);
//    }
//
//    @GetMapping("/seat-type")
//    public ResponseEntity<List<FlightScheduleSeatInformationDto>> getSeatInformationBySeatType(@RequestParam String seatType) {
//        List<FlightScheduleSeatInformationDto> seatInformationList = seatInformationService.getSeatInformationBySeatType(seatType);
//        return ResponseEntity.ok(seatInformationList);
//    }
//}



package com.binaryclan.flightinformationservice.controller;

import com.binaryclan.flightinformationservice.dto.FlightScheduleSeatInformationInputDto;
import com.binaryclan.flightinformationservice.dto.FlightScheduleSeatInformationOutputDto;
import com.binaryclan.flightinformationservice.service.FlightScheduleSeatInformationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/seats")
public class FlightScheduleSeatInformationController {

    @Autowired
    private FlightScheduleSeatInformationService seatInformationService;

    @PostMapping("/add")
    public ResponseEntity<FlightScheduleSeatInformationOutputDto> addSeatInformation(@RequestBody FlightScheduleSeatInformationInputDto inputDto) {
        FlightScheduleSeatInformationOutputDto savedSeatInformation = seatInformationService.addSeatInformation(inputDto);
        return ResponseEntity.ok(savedSeatInformation);
    }

    @GetMapping("/{id}")
    public ResponseEntity<FlightScheduleSeatInformationOutputDto> getSeatInformationById(@PathVariable Long id) {
        FlightScheduleSeatInformationOutputDto seatInformation = seatInformationService.getSeatInformationById(id);
        return ResponseEntity.ok(seatInformation);
    }

    @GetMapping("/all")
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
}
