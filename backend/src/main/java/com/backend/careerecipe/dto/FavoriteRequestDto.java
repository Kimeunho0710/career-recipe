package com.backend.careerecipe.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FavoriteRequestDto {
    private Long userId;
    private String subjectId;
    private String department;
    private String subject_name;
}
