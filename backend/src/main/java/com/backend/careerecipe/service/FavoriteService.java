package com.backend.careerecipe.service;

import com.backend.careerecipe.dto.FavoriteRequestDto;
import com.backend.careerecipe.entity.Favorite;
import com.backend.careerecipe.entity.Subject;
import com.backend.careerecipe.entity.Subject_id;
import com.backend.careerecipe.entity.User;
import com.backend.careerecipe.repository.FavoriteRepository;
import com.backend.careerecipe.repository.SubjectRepository;
import com.backend.careerecipe.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class FavoriteService {

    private final FavoriteRepository favoriteRepository;
    private final SubjectRepository subjectRepository;
    private final UserRepository userRepository;

    public void save(FavoriteRequestDto dto) {
        User user = userRepository.findById(dto.getUserId()).orElseThrow();
        Subject_id subjectId = new Subject_id(dto.getSubjectId(), dto.getDepartment());
        Subject subject = subjectRepository.findById(subjectId).orElseThrow();

        Favorite favorite = new Favorite();
        favorite.setUser(user);
        favorite.setSubject(subject);

        favoriteRepository.save(favorite);
    }

    public void delete(Long userId, String subjectId, String department) {
        favoriteRepository.deleteByUserIdAndSubjectIdAndDepartment(userId, subjectId, department);
    }
}
