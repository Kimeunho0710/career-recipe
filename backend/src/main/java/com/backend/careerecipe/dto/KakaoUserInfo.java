package com.backend.careerecipe.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class KakaoUserInfo {
    private Long id;
    private String nickname;
}