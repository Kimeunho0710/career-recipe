package com.backend.careerecipe.service;

import com.backend.careerecipe.dto.SubjectResponseDto;
import com.backend.careerecipe.entity.Job_subject_mapping;
import com.backend.careerecipe.repository.Job_subject_mappingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class JobSubjectService {

    private final Job_subject_mappingRepository mappingRepository;

    public List<SubjectResponseDto> getRecommendedSubjects(String job_id, String department, Integer grade, Integer semester_id) {
        List<Job_subject_mapping> mappings;

        if (department == null && grade == null && semester_id == null) {
            mappings = mappingRepository.findByJob_JobId(job_id);
        } else {
            mappings = mappingRepository.findByDynamicConditions(job_id, department, grade, semester_id);
        }

        return mappings.stream()
                .map(jsm -> new SubjectResponseDto(
                        jsm.getSubject().getSubject_id().getSubjectId(),
                        jsm.getSubject().getSubject_name(),
                        jsm.getSubject().getCredit()
                ))
                .collect(Collectors.toList());
    }
}
