package com.binaryclan.flightinformationservice.repository;

import com.binaryclan.flightinformationservice.model.FlightSchedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FlightScheduleRepository extends JpaRepository<FlightSchedule, Long> {
    List<FlightSchedule> findByFlightInformationId(Long flightId);
}
