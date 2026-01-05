package com.backend.careerecipe.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "favorite")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Favorite {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumns({
            @JoinColumn(name = "subject_id", referencedColumnName = "subject_id", nullable = false),
            @JoinColumn(name = "department", referencedColumnName = "department", nullable = false)
    })
    private Subject subject;
}
