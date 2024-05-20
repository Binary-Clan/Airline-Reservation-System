package com.binaryclan.flightinformationservice.repository;

import com.binaryclan.flightinformationservice.model.FlightInformation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FlightInformationRepository extends JpaRepository<FlightInformation, Long> {

}
