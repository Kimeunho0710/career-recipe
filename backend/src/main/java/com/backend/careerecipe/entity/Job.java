package com.backend.careerecipe.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Entity
@Table(name = "job")
@NoArgsConstructor
@AllArgsConstructor
public class Job {

    @Id
    @Column(name = "job_id")
    private String jobId;

    @Column(name = "job_name")
    private String jobName;

    @Column(name = "roadmap_url")
    private String roadmapUrl;
}