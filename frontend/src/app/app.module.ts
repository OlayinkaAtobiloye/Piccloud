import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { ContainerComponent } from './container/container.component';
import { LoaderComponent } from './loader/loader.component';
import { SuccessComponent } from './success/success.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageUploaderComponent,
    ContainerComponent,
    LoaderComponent,
    SuccessComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
