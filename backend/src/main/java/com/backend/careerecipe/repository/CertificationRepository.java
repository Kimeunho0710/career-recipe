package com.backend.careerecipe.repository;

import com.backend.careerecipe.entity.Certification;
import com.backend.careerecipe.entity.JobCertificationMapping;
import com.backend.careerecipe.entity.JobCertificationMappingId;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CertificationRepository extends JpaRepository<Certification, Long> {
}

