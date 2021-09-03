import { Component, OnInit } from '@angular/core';

import { Location } from "@angular/common";  

@Component({
  selector: 'location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent   {
   
  constructor(private location: Location ) {
  }
  back(){
    this.location.back();
  }

  
}
