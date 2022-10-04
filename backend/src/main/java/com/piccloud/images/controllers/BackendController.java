package com.piccloud.images.controllers;

import com.piccloud.images.models.internal.ImageRequest;
import com.piccloud.images.models.orms.Image;
import com.piccloud.images.services.ImageUploader;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;



@RestController
@AllArgsConstructor
@NoArgsConstructor
@CrossOrigin
public class BackendController {

    @Autowired
    private ImageUploader imageUploader;

    @GetMapping("/")
    public String index(){
        // Health Check
        return "Welcome to Piccloud! This service is up and running!";
    }

    @PostMapping(value = "/images", consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
    public Image uploadImage(@ModelAttribute ImageRequest imageRequest){
        return imageUploader.uploadImage(imageRequest);
    }

    @GetMapping("/images/{imageId}")
    public Image getImage(@PathVariable String imageId){
        return imageUploader.retrieveImage(imageId);
    }


}
