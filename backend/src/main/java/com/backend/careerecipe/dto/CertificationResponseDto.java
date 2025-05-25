package com.backend.careerecipe.dto;

import com.backend.careerecipe.entity.Certification;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class CertificationResponseDto {
    private String name;
    private String description;
    private String period;
    private String link;

    public static CertificationResponseDto fromEntity(Certification cert) {
        return new CertificationResponseDto(
                cert.getName(),
                cert.getDescription(),
                cert.getPeriod(),
                cert.getLink()
        );
    }
}