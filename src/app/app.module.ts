import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule,NativeScriptHttpClientModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeModule } from './pages/home/home.module';
import { LocationModule } from './pages/location/location.module';
import { PostsModule } from './pages/posts/posts.module';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptHttpClientModule,
    HomeModule,
    PostsModule,
    LocationModule ],
  declarations: [
    AppComponent  
   ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
