package com.backend.careerecipe.service;

import com.backend.careerecipe.dto.SubjectResponseDto;
import com.backend.careerecipe.dto.SubjectDto;
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
        List<SubjectDto> subjects = mappingRepository.findSubjectsWithInfo(job_id, department, grade, semester_id);

        return subjects.stream()
                .map(dto -> new SubjectResponseDto(
                        dto.getSubjectId(),
                        dto.getDepartment(), // ✅ department 추가
                        dto.getSubjectName(),
                        dto.getCredit()
                ))
                .collect(Collectors.toList());
    }
}
