package com.piccloud.images.repositories;

import com.piccloud.images.models.orms.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<Image, String> {

}


