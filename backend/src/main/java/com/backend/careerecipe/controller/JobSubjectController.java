package com.backend.careerecipe.controller;


import com.backend.careerecipe.dto.SubjectResponseDto;
import com.backend.careerecipe.service.JobSubjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/jobs")
public class JobSubjectController {
    private final JobSubjectService jobSubjectService;

    @GetMapping("/{job_id}/subjects")
    public List<SubjectResponseDto> getRecommendedSubjects(
            @PathVariable String job_id,
            @RequestParam(required = false) String department,
            @RequestParam(required = false) Integer grade,
            @RequestParam(required = false) Integer semester_id
    ) {
        return jobSubjectService.getRecommendedSubjects(job_id, department, grade, semester_id);
    }

}
