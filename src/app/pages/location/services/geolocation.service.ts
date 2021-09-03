// Angular Modules
import { Injectable } from '@angular/core';

import { GPS } from '@nativescript-community/gps';
const gps = new GPS();

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {    
    error:any;
 
    getLocation() {
        if (gps.isEnabled()) {
            return gps.getCurrentLocation({
                minimumUpdateTime: 1000
            });
        }
       
       return Promise.reject('Geolocation not enabled.');
    }

    enableGps(){
        return  this.enableLocation();       
    }

   private  enableLocation() {
        if (!gps.isEnabled()) {            
            return gps
                .authorize(true)
                .then(() => gps.enable())
                .then(() =>{gps.isEnabled()} );
        } else {
            return Promise.resolve(true);
        }
    }

    isGpsEnabled()
    {
        return gps.isEnabled();
    }
}
