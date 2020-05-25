import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MapMarker, GoogleMap } from '@angular/google-maps'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  latitude = 41.381856;
  longitude = -8.76329;
  options: google.maps.MapOptions;
  zoom = 50;
  marker;

  constructor() { }

  ngOnInit(): void {
    this.options  = {
      mapTypeId: 'hybrid',
      zoomControl: false,
      scrollwheel: false,
      disableDoubleClickZoom: true,
      maxZoom: 16,
      minZoom: 10,
      center: {lat: this.latitude, lng: this.longitude}
    };

    this.marker = {
      position: {
        lat: this.latitude,
        lng: this.longitude,
      },
      title: 'Rua Frei Sebastião de São Luís, Nº 1A, 1º Andar, Sala E, 4490-639 Póvoa de Varzim - Portugal',
      options: {
        animation: google.maps.Animation.DROP        ,
      },
    }
  }

}
