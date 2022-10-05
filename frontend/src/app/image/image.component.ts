import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageResponse } from '../models/image';
import { ImageUploaderService } from '../services/image-uploader.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  imageLink: string = "https://piccloud.netlify.app/";
  imageId: string = "";
  retrievedImage = "";
  fileName = "";

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private imageUploader: ImageUploaderService) {
    
  }
  

  ngOnInit(): void {
    this.imageId = this.activatedRoute.snapshot.paramMap.get("id")!;
    this.imageLink += this.imageId;
    this.imageUploader.getImage(this.imageId).subscribe(
      {
        next: (res: ImageResponse) => {
          const base64Data = res.image;
          this.retrievedImage = 'data:image/jpeg;base64,' + base64Data;
          this.fileName = res.file_name;
      },
      error: (err) => {
        this.router.navigate(["/"]);
      }
    }
    );
    

  }

  downloadImage() {
     
  }


}
