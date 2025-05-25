package com.backend.careerecipe.controller;

import com.backend.careerecipe.dto.CertificationResponseDto;
import com.backend.careerecipe.entity.Certification;
import com.backend.careerecipe.service.JobCertificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/jobs")
public class JobCertificationController {

    private final JobCertificationService jobCertificationService;

    @GetMapping("/{job_id}/certifications")
    public ResponseEntity<List<CertificationResponseDto>> getCertifications(@PathVariable String job_id) {
        List<Certification> certifications = jobCertificationService.getCertificationsByJobId(job_id);
        List<CertificationResponseDto> response = certifications.stream()
                .map(CertificationResponseDto::fromEntity)
                .collect(Collectors.toList());
        return ResponseEntity.ok(response);
    }
}
