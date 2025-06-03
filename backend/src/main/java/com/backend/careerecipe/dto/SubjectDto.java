package com.backend.careerecipe.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class SubjectDto {
    private String subjectId;
    private String department;
    private String subjectName;
    private int credit;
    private int grade;
    private int semesterId;
}
