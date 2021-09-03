

import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
 
import { LocationComponent } from './components/location/location.component';
const routes: Routes = [ 
  
  { path: '', component: LocationComponent }
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class LocationRoutingModule {}
