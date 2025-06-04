package com.backend.careerecipe.controller;

import com.backend.careerecipe.config.JwtProvider;
import com.backend.careerecipe.dto.KakaoLoginResponse;
import com.backend.careerecipe.dto.KakaoTokenRequest;
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
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000") // CORS 허용
public class KakaoOAuthController {

    private final KakaoOAuthService kakaoOAuthService;
    private final JwtProvider jwtProvider;
    private final UserRepository userRepository;

    @PostMapping("/kakao")
    public KakaoLoginResponse kakaoLogin(@RequestBody KakaoTokenRequest tokenRequest) {
        String accessToken = tokenRequest.getAccessToken();

        // 토큰으로 사용자 정보 요청
        KakaoUserInfo userInfo = kakaoOAuthService.getUserInfo(accessToken);

        // 유저가 없으면 저장
        User user = userRepository.findByKakaoId(userInfo.getId())
                .orElseGet(() -> {
                    User newUser = new User();
                    newUser.setKakaoId(userInfo.getId());
                    newUser.setNickname(userInfo.getNickname());
                    return userRepository.save(newUser);
                });

        // JWT 발급
        String jwt = jwtProvider.createToken(user.getKakaoId());

        // 응답 리턴
        return new KakaoLoginResponse(user.getId(), user.getNickname(), jwt);
    }
}
