package com.binaryclan.frontendservice.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserAuth {

    @Id // Marks id as the primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Specifies auto-generation strategy
    private int id;
    private String userName;
    private String password;
}
