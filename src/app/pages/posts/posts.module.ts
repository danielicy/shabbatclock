
import { NgModule } from '@angular/core'; 
import { NativeScriptCommonModule } from "@nativescript/angular";

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';

@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    PostsRoutingModule,
    NativeScriptCommonModule    
  ],
  exports:[
    PostsComponent
  ]
})
export class PostsModule { }
