package com.backend.careerecipe.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Semester {

    @Id
    @Column(name = "semester_id")
    private Integer semester_id;

    @Column(name = "semester_name")
    private String name;
}