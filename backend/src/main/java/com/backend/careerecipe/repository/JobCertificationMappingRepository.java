package com.backend.careerecipe.repository;

import com.backend.careerecipe.entity.JobCertificationMapping;
import com.backend.careerecipe.entity.JobCertificationMappingId;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface JobCertificationMappingRepository extends JpaRepository<JobCertificationMapping, JobCertificationMappingId> {
    List<JobCertificationMapping> findByJob_JobId(String jobId);

}