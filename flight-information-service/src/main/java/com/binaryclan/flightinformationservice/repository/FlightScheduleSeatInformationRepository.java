package com.binaryclan.flightinformationservice.repository;

import com.binaryclan.flightinformationservice.model.FlightScheduleSeatInformation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FlightScheduleSeatInformationRepository extends JpaRepository<FlightScheduleSeatInformation, Long> {

}
