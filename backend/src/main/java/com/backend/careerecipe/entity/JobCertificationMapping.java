package com.backend.careerecipe.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
public class JobCertificationMapping {

    @EmbeddedId
    private JobCertificationMappingId id;

    @ManyToOne
    @MapsId("jobId")  // JobCertificationMappingId 안에 있는 필드명과 일치해야 함
    @JoinColumn(name = "job_id")
    private Job job;

    @ManyToOne
    @MapsId("certificationId")
    @JoinColumn(name = "certification_id")
    private Certification certification;
}
