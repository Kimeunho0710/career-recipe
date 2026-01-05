package com.backend.careerecipe.service;

import com.backend.careerecipe.repository.CertificationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CertificationService {
    private final CertificationRepository certificationRepository;

    // 예: 전체 자격증 조회
    // public List<Certification> getAllCertifications() {
    //     return certificationRepository.findAll();
    // }
}



// 추후 자격증 목록 전체 조회나 추가/수정 로직이 있으면 유지하기.