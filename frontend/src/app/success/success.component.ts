import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageUploaderService } from '../services/image-uploader.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  imageLink: string = "https://piccloud.netlify.app";
  imageId: string = "";
  retrievedImage = "";

  constructor(private activatedRoute: ActivatedRoute, private imageUploader: ImageUploaderService) {
    this.imageId = this.activatedRoute.snapshot.paramMap.get("id")!;
    
  
    
  }
  

  ngOnInit(): void {
    console.log(this.imageId);
    this.imageUploader.getImage(this.imageId).subscribe(
      res => {
        const base64Data = res.image;
        this.retrievedImage = 'data:image/jpeg;base64,' + base64Data;
      }
    );
    

  }

  copyLink() {
     // Copy the text inside the text field
    navigator.clipboard.writeText(this.imageLink);
    // Alert the copied text
    alert("Copied the text: " + this.imageLink);
  }

}
