package com.backend.careerecipe.controller;

import com.backend.careerecipe.dto.RoadMapResponseDto;
import com.backend.careerecipe.entity.Job;
import com.backend.careerecipe.service.JobService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/jobs")
public class JobController {

    private final JobService jobService;

    @GetMapping
    public List<Job> getAllJobs() {
        return jobService.getAllJobs();
    }
    @GetMapping("/{job_id}/roadmap")
    public ResponseEntity<RoadMapResponseDto> getRoadmap(@PathVariable("job_id") String job_id) {
        return ResponseEntity.ok(jobService.getRoadmap(job_id));
    }
}
