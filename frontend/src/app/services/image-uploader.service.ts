import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ImageResponse } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class ImageUploaderService {
  baseURL = "https://localhost:8080"
  constructor(private http: HttpClient) { }

  uploadImage(form: FormData){
    return this.http.post<ImageResponse>(`${this.baseURL}/images`, form);
  }

  getImage(id: string){
    return this.http.get<ImageResponse>(`${this.baseURL}/images/${id}`);
  }
}
