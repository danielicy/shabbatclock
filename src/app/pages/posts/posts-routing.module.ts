
import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular';
import { PostsComponent } from './posts.component';


 
 
const routes: Routes = [
  
  
  { path: '', component: PostsComponent }
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class PostsRoutingModule {}
