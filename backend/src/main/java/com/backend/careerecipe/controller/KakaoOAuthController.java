package com.backend.careerecipe.controller;

import com.backend.careerecipe.config.JwtProvider;
import com.backend.careerecipe.dto.KakaoUserInfo;
import com.backend.careerecipe.entity.User;
import com.backend.careerecipe.repository.UserRepository;
import com.backend.careerecipe.service.KakaoOAuthService;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/oauth")
public class KakaoOAuthController {

    private final KakaoOAuthService kakaoOAuthService;
    private final JwtProvider jwtProvider;
    private final UserRepository userRepository;

    @GetMapping("/kakao")
    public void kakaoLogin(@RequestParam String code, HttpServletResponse response) throws IOException {
        // 1. 인가코드로 카카오에서 액세스 토큰 발급
        String accessToken = kakaoOAuthService.getAccessToken(code);

        // 2. 토큰으로 사용자 정보 조회
        KakaoUserInfo userInfo = kakaoOAuthService.getUserInfo(accessToken);

        // 3. DB에 사용자 정보 없으면 새로 저장
        userRepository.findByKakaoId(userInfo.getId())
                .orElseGet(() -> {
                    User newUser = new User();
                    newUser.setKakaoId(userInfo.getId());
                    newUser.setNickname(userInfo.getNickname());
                    return userRepository.save(newUser);
                });

        // 4. JWT 발급
        String jwt = jwtProvider.createToken(userInfo.getId());

        // 5. 프론트엔드로 리다이렉트 + 토큰 전달
        response.sendRedirect("http://localhost:3000/login/success?token=" + jwt);
    }
}
