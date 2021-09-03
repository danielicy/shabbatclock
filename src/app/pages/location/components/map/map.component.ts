import { Component, Input } from '@angular/core';

import { registerElement } from 'nativescript-angular';
import { MapView, Marker, Position } from 'nativescript-google-maps-sdk'; 
import { GeolocationService } from '../../services/geolocation.service';

registerElement('MapView', () => MapView);



@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent  {

  
 latitude =  32.290806945275186; 
longitude =  34.86678775498538;
/*latitude =  this.currentLocation.lat | 0;
longitude =  this.currentLocation.lon | 0;*/
zoom = 10;
minZoom = 0;
maxZoom = 22;
bearing = 0;
tilt = 0;
padding = [40, 40, 40, 40];
mapView: MapView;


constructor(private geolocation:GeolocationService) {
}

 

 getLocation(){    
   this.geolocation.getLocation()
  .then(location => {     
    this.addMarker(location.latitude,location.longitude)
  });  
}

//Map events
onMapReady(event) { 
    this.mapView = event.object; 
    
    if(this.geolocation.isGpsEnabled()){
      this.getLocation();
    }else{
      this.geolocation.enableGps()
      .then(() => {
            
        this.getLocation();         
    })
    .catch( error => {
      console.log(error);
    });
      
    }
}

addMarker(lat:number ,lon:number){
  var marker = new Marker();
  marker.position = Position.positionFromLatLng(lat,lon);
  marker.title = "You are here!";
  marker.snippet = "Hi there!";
  marker.userData = {index: 1};
  this.mapView.addMarker(marker);
}


}
