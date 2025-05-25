package com.backend.careerecipe.entity;

import jakarta.persistence.*;
import lombok.*;
import java.io.Serializable;

@Embeddable
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Subject_id implements Serializable {

    @Column(name = "subject_id", length = 10, nullable = false)
    private String subjectId;

    @Column(name = "department", length = 100, nullable = false)
    private String department;
}
