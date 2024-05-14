package com.binaryclan.frontendservice.repository;

import com.binaryclan.frontendservice.model.UserAuth;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserAuthRepository extends JpaRepository<UserAuth, Integer> {

}
