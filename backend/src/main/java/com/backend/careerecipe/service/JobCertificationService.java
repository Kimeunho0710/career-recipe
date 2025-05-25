package com.backend.careerecipe.service;

import com.backend.careerecipe.entity.Certification;
import com.backend.careerecipe.repository.JobCertificationMappingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class JobCertificationService {

    private final JobCertificationMappingRepository mappingRepository;

    public List<Certification> getCertificationsByJobId(String jobId) {
        return mappingRepository.findByJob_JobId(jobId).stream()
                .map(mapping -> mapping.getCertification())
                .collect(Collectors.toList());
    }
}
