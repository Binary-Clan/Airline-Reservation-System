package com.binaryclan.flightinformationservice.repository;

import com.binaryclan.flightinformationservice.model.FlightInformation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FlightInformationRepository extends JpaRepository<FlightInformation, Long> {

}
