package com.backend.careerecipe.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class JobDetailResponseDto {
    private String name;
    private String description;
    private String imageUrl;
}
