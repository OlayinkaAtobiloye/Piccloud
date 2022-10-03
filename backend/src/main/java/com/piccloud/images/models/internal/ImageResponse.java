package com.piccloud.images.models.internal;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.swing.*;
import java.awt.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ImageResponse {
    private String id;
    private String file_name;
    private Image image;
}
