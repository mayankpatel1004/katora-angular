import { Component, AfterViewInit, ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-contact-two',
  templateUrl: './contact-two.component.html',
  styleUrls: ['./contact-two.component.scss']
})
export class ContactTwoComponent implements AfterViewInit {

  constructor() { }


  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  map: google.maps.Map;
  lat = 40.73061;
  lng = -73.935242;

  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 8
  };

  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
    title: 'Hello World!'
  });

  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
    this.marker.setMap(this.map);
  }

}
