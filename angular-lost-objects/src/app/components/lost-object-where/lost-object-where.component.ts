import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError, filter, scan } from 'rxjs/operators';
import { LostObjectLocation } from 'src/app/interfaces/lost-object-location.interface';
import { LostObjectService } from 'src/app/services/lost-object.service';


@Component({
  selector: 'app-lost-object-where',
  templateUrl: './lost-object-where.component.html',
  styleUrls: ['./lost-object-where.component.css']
})
export class LostObjectWhereComponent implements OnInit {


  apiLoaded: Observable<boolean>
  adress: string = ''
  location!: LostObjectLocation

  lat!: number;
  long!: number;

  lostObjectLatLg: google.maps.LatLngLiteral = {lat: 37.36133765325532, lng: -5.964321690581096};
  markerOptions: google.maps.MarkerOptions = {
    draggable: true
  };

  constructor(private httpClient: HttpClient, private lostObjectService: LostObjectService ) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyByNlJfkMKkavCkpc9KMY0Wf5fASr4OOic', 'callback')
        .pipe(
          map(() => true),
          catchError(() => of(false)),
        );
  }


  ngOnInit(): void {
  }


  searchAddress() {
    let addressSplited = this.adress.split(',');
    this.lostObjectLatLg = {lat: Number(addressSplited[0]), lng: Number(addressSplited[1])};
  }

  updateLocationMarker(event: google.maps.MapMouseEvent) {
    console.log(`${event.latLng?.lat()} , ${event.latLng?.lat()}`);
    this.lat = event.latLng.lat()
    this.long = event.latLng.lng()
  }


  getLocationMarkerLat(event: google.maps.MapMouseEvent) {
    return event.latLng.lat()
  }

  getLocationMarkerLong(event: google.maps.MapMouseEvent) {
    return event.latLng.lng()
  }


  locationObjectLost(){
    this.updateLocationMarker
    this.lostObjectService.postLostObjectLocation(this.lat, this.long)
  }




}
