
import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'; 

const routes: Routes = [
  { path: '',
  loadChildren: () => import('./pages/home/home.module')
  .then(mod => mod.HomeModule)
  },
  { path: 'posts',
  loadChildren: () => import('./pages/posts/posts.module')
  .then(mod => mod.PostsModule)
  },
   { path: 'location',
  loadChildren: () => import('./pages/location/location.module')
  .then(mod => mod.LocationModule)
  }, 
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
