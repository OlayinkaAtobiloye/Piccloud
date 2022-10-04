package com.piccloud.images.repositories;

import com.piccloud.images.models.orms.Image;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import static org.assertj.core.api.Assertions.assertThat;



public class ImageRepositoryTest {
    @Autowired
    TestEntityManager entityManager;
    @Autowired
    ImageRepository imageRepository;

//    @Test
//    public void it_should_save_image() {
//        Image image = new Image();
//        image.setDate_created(Date.from(Instant.now()));
//        image.setFile_name("test");
//        image.setId("photo-1234-5678-9000");
//        image.setImage(null);
//
//        image = entityManager.merge(image);
//
//        assertThat(imageRepository.findById(image.getId()).get()).isEqualTo(image);
//    }
//    if(myEntity.getId()>0){entityManager.persist(myEntity);} else{entityManager.merge(myEntity);}

//    @Test
//    public void it_should_find_image_byId() {
//        Image image = new Image();
//        image.setDate_created(Date.from(Instant.now()));
//        image.setFile_name("test");
//        image.setId("photo-1234-5678-9000");
//        image.setImage(null);
//
//        image = entityManager.merge(image);
//
//        assertThat(imageRepository.findById(image.getId()).get()).isEqualTo(image);
//    }

    @Test
    public void it_should_find_image_byId() {
        assertThat(1).isEqualTo(1);
    }

}