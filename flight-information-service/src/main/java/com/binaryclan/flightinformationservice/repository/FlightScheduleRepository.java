package com.binaryclan.flightinformationservice.repository;

import com.binaryclan.flightinformationservice.model.FlightSchedule;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FlightScheduleRepository extends JpaRepository<FlightSchedule, Long> {

}
