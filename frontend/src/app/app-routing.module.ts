import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { ImageComponent } from './image/image.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  {path: "", component: ImageUploaderComponent},
  {path: ":id", component: ImageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
