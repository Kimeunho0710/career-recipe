package com.backend.careerecipe.controller;

import com.backend.careerecipe.dto.FavoriteRequestDto;
import com.backend.careerecipe.service.FavoriteService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/favorites")
@RequiredArgsConstructor
public class FavoriteController {

    private final FavoriteService favoriteService;

    @PostMapping
    public void save(@RequestBody FavoriteRequestDto dto) {
        favoriteService.save(dto);
    }

    @DeleteMapping
    public void delete(@RequestBody FavoriteRequestDto dto) {
        favoriteService.delete(dto.getUserId(), dto.getSubjectId(), dto.getDepartment());
    }
}
