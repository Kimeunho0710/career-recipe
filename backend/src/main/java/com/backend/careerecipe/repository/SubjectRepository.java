package com.backend.careerecipe.repository;

import com.backend.careerecipe.entity.Subject;
import com.backend.careerecipe.entity.Subject_id;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SubjectRepository extends JpaRepository<Subject, Subject_id> {

    @Query("SELECT s FROM Subject s WHERE s.subject_id.subjectId = :subjectId AND s.subject_id.department = :department")
    Optional<Subject> findBySubjectKeys(@Param("subjectId") String subjectId,
                                        @Param("department") String department);
}
