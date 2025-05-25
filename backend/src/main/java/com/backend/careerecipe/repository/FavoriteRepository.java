package com.backend.careerecipe.repository;

import com.backend.careerecipe.entity.Favorite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import jakarta.transaction.Transactional;

public interface FavoriteRepository extends JpaRepository<Favorite, Long> {

    @Modifying
    @Transactional
    @Query("DELETE FROM Favorite f WHERE f.user.id = :userId AND f.subject.subject_id.subjectId = :subjectId AND f.subject.subject_id.department = :department")
    void deleteByUserIdAndSubjectIdAndDepartment(
            @Param("userId") Long userId,
            @Param("subjectId") String subjectId,
            @Param("department") String department
    );
}
