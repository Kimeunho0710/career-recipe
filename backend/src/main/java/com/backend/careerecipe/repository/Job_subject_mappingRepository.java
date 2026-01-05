package com.backend.careerecipe.repository;

import com.backend.careerecipe.dto.SubjectDto;
import com.backend.careerecipe.entity.Job_subject_mapping;
import com.backend.careerecipe.entity.Job_subject_mapping_id;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface Job_subject_mappingRepository extends JpaRepository<Job_subject_mapping, Job_subject_mapping_id> {

    // 전체 과목 (필터 없이)
    List<Job_subject_mapping> findByJob_JobId(String jobId);

    // 필터 조건이 있을 경우 동적 쿼리
    @Query("""
    SELECT new com.backend.careerecipe.dto.SubjectDto(
        s.subject_id.subjectId,
        s.subject_id.department,
        s.subject_name,
        s.credit,
        s.grade,
        s.semester.semester_id
    )
    FROM Job_subject_mapping jsm
    JOIN jsm.subject s
    WHERE jsm.job.jobId = :jobId
    AND (:department IS NULL OR s.subject_id.department = :department)
    AND (:grade IS NULL OR s.grade = :grade)
    AND (:semesterId IS NULL OR s.semester.semester_id = :semesterId)
""")
    List<SubjectDto> findSubjectsWithInfo(
            @Param("jobId") String jobId,
            @Param("department") String department,
            @Param("grade") Integer grade,
            @Param("semesterId") Integer semesterId
    );


}
