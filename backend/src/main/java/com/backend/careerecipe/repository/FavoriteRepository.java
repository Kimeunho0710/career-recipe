package com.backend.careerecipe.repository;

import com.backend.careerecipe.entity.Favorite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import jakarta.transaction.Transactional;

import java.util.List;

public interface FavoriteRepository extends JpaRepository<Favorite, Long> {

    // 즐겨찾기 삭제 (커스텀 쿼리)
    @Modifying
    @Transactional
    @Query("DELETE FROM Favorite f WHERE f.user.id = :userId AND f.subject.subject_id.subjectId = :subjectId AND f.subject.subject_id.department = :department")
    void deleteByUserIdAndSubjectIdAndDepartment(
            @Param("userId") Long userId,
            @Param("subjectId") String subjectId,
            @Param("department") String department
    );

    // ✅ 즐겨찾기 목록 조회 (수정됨)
    List<Favorite> findByUser_Id(Long userId);
}
