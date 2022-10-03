package com.piccloud.images.controllers;

import com.piccloud.images.models.internal.ImageRequest;
import com.piccloud.images.models.orms.Image;
import com.piccloud.images.services.ImageUploader;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.time.Instant;
import java.util.Date;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

class BackendControllerTest {
    BackendController backendController;
    ImageUploader imageUploaderMock;
    ImageRequest imageRequest;
    Image image;

    @BeforeEach
    void setUp(){
        image = new Image();
        image.setDate_created(Date.from(Instant.now()));
        image.setFile_name("test");
        image.setId("photo-1234-5678-9000");
        image.setImage(null);
        imageRequest = new ImageRequest();
        imageRequest.setImage(null);
        imageRequest.setFile_name("test");
        imageUploaderMock = Mockito.mock(ImageUploader.class);
        backendController = new BackendController(imageUploaderMock);
        when(imageUploaderMock.uploadImage(imageRequest)).thenReturn(image);
        when(imageUploaderMock.retrieveImage("photo-1234-5678-9000")).thenReturn(image);

    }

    @Test
    void index() {
        assertEquals("App runs successfully!", backendController.index());
    }

    @Test
    void uploadImage() {
        assertEquals(image, backendController.uploadImage(imageRequest));
    }

    @Test
    void getImage() {
        assertEquals(image, backendController.getImage("photo-1234-5678-9000"));
    }
}