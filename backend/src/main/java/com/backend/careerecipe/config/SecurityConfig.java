package com.backend.careerecipe.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/oauth/**").permitAll() // 카카오 로그인은 모두 허용
                        .requestMatchers("/api/users/me/**").authenticated() // 사용자 정보는 인증 필요
                        .anyRequest().permitAll() // 그 외는 모두 허용
                );

        // 추후 JWT 필터가 있다면 여기에 추가 가능
        // http.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}
