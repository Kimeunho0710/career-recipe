package com.backend.careerecipe.controller;

import com.backend.careerecipe.dto.JobDetailResponseDto;
import com.backend.careerecipe.dto.RoadMapResponseDto;
import com.backend.careerecipe.dto.SubjectDto;
import com.backend.careerecipe.dto.SubjectResponseDto;
import com.backend.careerecipe.entity.Job;
import com.backend.careerecipe.repository.Job_subject_mappingRepository;
import com.backend.careerecipe.service.JobService;
import com.backend.careerecipe.service.JobSubjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.annotation.RequestScope;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/jobs")
public class JobController {

    private final JobService jobService;
    private final JobSubjectService jobSubjectService;
    private final Job_subject_mappingRepository jobSubjectMappingRepository;
    @GetMapping
    public List<Job> getAllJobs() {
        return jobService.getAllJobs();
    }

    @GetMapping("/{job_id}/roadmap")
    public ResponseEntity<RoadMapResponseDto> getRoadmap(@PathVariable("job_id") String job_id) {
        return ResponseEntity.ok(jobService.getRoadmap(job_id));
    }

    @GetMapping("/{job_id}/detail")
    public ResponseEntity<JobDetailResponseDto> getJobDetail(@PathVariable String jobId) {
        return ResponseEntity.ok(jobService.getJobDetail(jobId));
    }
    @GetMapping("/api/jobs/{jobId}/subjects")
    public List<SubjectDto> getRecommendedSubjects(
            @PathVariable String jobId,
            @RequestParam(required = false) String department,
            @RequestParam(required = false) Integer grade,
            @RequestParam(required = false) Integer semester_id
    ) {
        return jobSubjectMappingRepository.findSubjectsWithInfo(jobId, department, grade, semester_id);
    }

}
