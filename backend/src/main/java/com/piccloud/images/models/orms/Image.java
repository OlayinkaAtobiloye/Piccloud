package com.piccloud.images.models.orms;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name ="piccloud")
@Getter
@Setter
public class Image {

    @Id
    @GeneratedValue(generator = "custom_id_generator")
    @GenericGenerator(name = "custom_id_generator", strategy = "com.piccloud.images.models.generators.CustomIdGenerator")
    @Column(name="id")
    private String id;

    @Column(nullable = false, name = "date_created")
    private Date date_created;

    @Column(name = "file_name")
    private String file_name;

    @Lob
    @Column(name="image", nullable = false)
    private byte[] image;

}
