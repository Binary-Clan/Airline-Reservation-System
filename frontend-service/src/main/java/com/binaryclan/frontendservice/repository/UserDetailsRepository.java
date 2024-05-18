package com.binaryclan.frontendservice.repository;

import com.binaryclan.frontendservice.model.UserAuth;
import com.binaryclan.frontendservice.model.UserDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDetailsRepository extends JpaRepository<UserDetails, Integer> {

}
