import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageUploaderService } from '../services/image-uploader.service';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  imageLink: string = "https://piccloud.netlify.app/";
  @Input() imageId: string = "";
  retrievedImage = "";

  constructor(private activatedRoute: ActivatedRoute, private imageUploader: ImageUploaderService, private clipboard: Clipboard) {
    
  }
  

  ngOnInit(): void {
    this.imageLink += this.imageId;
    this.imageUploader.getImage(this.imageId).subscribe(
      res => {
        console.log(this.imageId);
        const base64Data = res.image;
        this.retrievedImage = 'data:image/jpeg;base64,' + base64Data;
      }
    );
    

  }

  copyLink() {
     // Copy the text inside the text field
     this.clipboard.copy(this.imageLink);
    // Alert the copied text
    alert("Copied the text: " + this.imageLink);
  }

}
