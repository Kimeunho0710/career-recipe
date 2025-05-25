package com.backend.careerecipe.service;

import com.backend.careerecipe.dto.JobDetailResponseDto;
import com.backend.careerecipe.dto.RoadMapResponseDto;
import com.backend.careerecipe.entity.Job;
import com.backend.careerecipe.repository.JobRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class JobService {

    private final JobRepository jobRepository;

    public List<Job> getAllJobs() {
        return jobRepository.findAll();
    }

    public RoadMapResponseDto getRoadmap(String job_id) {
        Job job = jobRepository.findById(job_id)
                .orElseThrow(() -> new IllegalArgumentException("해당 직업이 존재하지 않습니다: " + job_id));

        return new RoadMapResponseDto(
                job.getJobId(),
                job.getRoadmapUrl()
        );
    }

    public JobDetailResponseDto getJobDetail(String jobId) {
        Job job = jobRepository.findById(jobId)
                .orElseThrow(() -> new RuntimeException("직업 없음"));

        return new JobDetailResponseDto(
                job.getJobName(),
                "설명 없음",
                "이미지 없음"
        );

    }
}
