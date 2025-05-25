package com.backend.careerecipe.entity;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Embeddable
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class JobCertificationMappingId implements Serializable {
    private String jobId;
    private Long certificationId;
}

