package com.backend.careerecipe.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class SubjectResponseDto {
    private String subject_id;
    private String department;
    private String subject_name;
    private Integer credit;

}
