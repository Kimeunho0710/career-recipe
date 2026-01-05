package com.backend.careerecipe.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class KakaoLoginResponse {
    private Long userId;
    private String nickname;
    private String jwt;
}
