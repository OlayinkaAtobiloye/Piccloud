package com.piccloud.images.services;

import com.piccloud.images.models.internal.ImageRequest;
import com.piccloud.images.models.orms.Image;
import com.piccloud.images.repositories.ImageRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.web.multipart.MultipartFile;

import javax.swing.*;
import java.time.Instant;
import java.util.Date;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;

class ImageUploaderTest  {
    Image image;
    ImageUploader imageUploader;
    ImageRepository imageRepositoryMock;

    @BeforeEach
    void setUp(){
        image = new Image();
        image.setDate_created(null);
        image.setFile_name("test");
        image.setId("photo-1234-5678-9000");
        image.setImage(null);
        imageRepositoryMock = Mockito.mock(ImageRepository.class);
        when(imageRepositoryMock.save(any())).thenReturn(image);
        when(imageRepositoryMock.save(null)).thenReturn(image);
        when(imageRepositoryMock.findById(anyString())).thenReturn(Optional.of(image));
        imageUploader = new ImageUploader(imageRepositoryMock);

    }


//    @Test(illegalA)
//    void uploadImage() {
//        ImageRequest imageRequest = new ImageRequest();
//        imageRequest.setImage((MultipartFile) new ImageIcon().getImage());
//        imageRequest.setFile_name("test");
//        assertEquals(image, imageUploader.uploadImage(imageRequest));
//    }

    @Test
    void retrieveImage() {
        assertEquals(image, imageUploader.retrieveImage("photo-1234-5678-9000"));
    }
}