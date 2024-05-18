package com.binaryclan.frontendservice.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserDetails {

    @Id // Marks id as the primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Specifies auto-generation strategy
    private int id;
    private String userName;
    private String firstName;
    private String lastName;
    private String fullName;
    private String nic;
    private String passportId;
    private String country;
    private Date birthDay;
    private String phoneNumber;
    private String email;

}