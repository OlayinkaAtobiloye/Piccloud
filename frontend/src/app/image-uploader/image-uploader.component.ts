import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageResponse } from '../models/image';
import { ImageUploaderService } from '../services/image-uploader.service';


@Component({
  selector: 'image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css']
})

export class ImageUploaderComponent implements OnInit {
  image: File  = new File([], "");
  file_name: string = "";
  loading?: boolean = false;
  imageId: string = "";
  success: boolean = false;

  constructor(private imageUploader: ImageUploaderService, private router: Router) {
  
  }

  uploadImage(){
    const form = new FormData();
    form.append("image", this.image);
    form.append("file_name", this.file_name);
    this.loading = true;
    this.imageUploader.uploadImage(form).subscribe(
      {
        next: (data: ImageResponse) => {
          // this.router.navigate([data.id]);
          this.success = true;
          this.imageId = data.id;
      },
      error: (err) => {
        this.router.navigate(["/"]);
      }
      }
    )
  }

ngOnInit(): void{

}

  ngAfterViewInit(): void {
    const dropZoneInput: HTMLInputElement = document.querySelector(".drag-and-drop__input") as HTMLInputElement;
    const dropZoneElement: HTMLElement = document.querySelector(".drag-and-drop") as HTMLElement;
    dropZoneElement.addEventListener("dragover", (e: DragEvent) => {
      e.preventDefault();
      dropZoneElement.classList.add("drop-zone--over");
    });


    dropZoneInput.addEventListener("change", (e) => {
      e.preventDefault();
      const target: HTMLInputElement = e.target as HTMLInputElement;
      if (target.files!.length) {
        this.updateThumbnail(dropZoneElement, target.files![0]);
      }
      dropZoneElement.classList.remove("drag-and-drop--over");
   
    });

    ["dragleave", "dragend"].forEach((type: string) => {
      dropZoneElement.addEventListener(type, (e: Event) => {
        dropZoneElement.classList.remove("drag-and-drop--over");
      });
    });

    dropZoneElement.addEventListener("drop", (e: DragEvent) => {
      e.preventDefault();
      if (e.dataTransfer!.files.length) {
        dropZoneInput.files = e.dataTransfer!.files;
        this.updateThumbnail(dropZoneElement, e.dataTransfer!.files[0]);
      }
      dropZoneElement.classList.remove("drag-and-drop--over");
    });

  }


  updateThumbnail(dropZoneElement: HTMLElement, file: File) {
    let thumbnailElement: HTMLElement | null = dropZoneElement.querySelector(".drag-and-drop__thumb");
    this.image = file;
    this.file_name = file.name;
    // First time - remove the prompt
    if (dropZoneElement.querySelector(".drag-and-drop__prompt")) {
      dropZoneElement.querySelector(".drag-and-drop__prompt")!.remove();
    }

    // First time - there is no thumbnail element, so lets create it
    if (!thumbnailElement) {
      thumbnailElement = document.createElement("div");
      thumbnailElement.classList.add("drag-and-drop__thumb");
      dropZoneElement.appendChild(thumbnailElement);
    }
    thumbnailElement.dataset["label"] = file.name;
    

    // Show thumbnail for image files
    if (file.type.startsWith("image/")) {
      const imageURL: string = URL.createObjectURL(file);
      thumbnailElement!.style.backgroundImage = `url('${imageURL}')`;
      
    } else {
      thumbnailElement!.style.backgroundImage = "";
    }
    this.uploadImage();

  }
}
