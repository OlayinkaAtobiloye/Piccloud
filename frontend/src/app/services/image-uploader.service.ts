import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ImageResponse } from '../models/image';
import { isDevMode } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageUploaderService {
  baseURL = isDevMode() ? "http://localhost:8080" : "https://piccloud.herokuapp.com";
  constructor(private http: HttpClient) { }

  uploadImage(form: FormData){
    return this.http.post<ImageResponse>(`${this.baseURL}/images`, form);
  }

  getImage(id: string){
    return this.http.get<ImageResponse>(`${this.baseURL}/images/${id}`);
  }
}
