package com.piccloud.images.services;

import com.piccloud.images.models.internal.ImageRequest;
import com.piccloud.images.models.orms.Image;
import com.piccloud.images.repositories.ImageRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.Instant;
import java.util.Date;
import java.util.Optional;

@Service
@NoArgsConstructor
public class ImageUploader {
    @Autowired
    private ImageRepository imageRepository;

    ImageUploader(ImageRepository imageRepository){
        this.imageRepository = imageRepository;
    }

    public Image uploadImage(ImageRequest imageRequest) {
        Image created_image;
        try {
            Image image = new Image();
            image.setImage(imageRequest.getImage().getBytes());
            image.setDate_created(Date.from(Instant.now()));
            image.setFile_name(imageRequest.getFile_name());
            created_image = imageRepository.save(image);
        } catch (Exception e) {
            throw new IllegalArgumentException("Image could not be uploaded.");
        }
        return created_image;
    }

    public Image retrieveImage(String imageId)  {
        Optional<Image> retrieved_image;
        try {
            retrieved_image = imageRepository.findById(imageId);
        } catch (Exception e) {
            throw new IllegalArgumentException("Image could not be uploaded.");
        }
        return retrieved_image.orElseThrow(IllegalArgumentException::new);
    }
}
