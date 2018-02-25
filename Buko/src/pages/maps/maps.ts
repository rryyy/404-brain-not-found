import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ConnectivityServiceProvider } from '../../providers/connectivity-service/connectivity-service';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the MapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;

@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {
 @ViewChild('map') mapElement: ElementRef;
  map: any;
 latLng: any;
 location: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,  public connectivityService: ConnectivityServiceProvider, private geolocation: Geolocation) {
  	 this.loadGoogleMaps();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapsPage');
  }
 loadGoogleMaps(){
    this.geolocation.getCurrentPosition().then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      let marker = new google.maps.Marker({
       map: this.map,
       animation: google.maps.Animation.DROP,
       position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
     });
      // this.locationTracker.startTracking(marker);
    }, (err) => {
      console.log(err);
    });
  }
}
