import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Network } from '@ionic-native/network';
import { Platform } from 'ionic-angular';

/*
  Generated class for the ConnectivityServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConnectivityServiceProvider {
	onDevice: boolean;
  constructor(public http: HttpClient, public platform: Platform, private network: Network) {
    this.onDevice = this.platform.is('cordova');
  }
  isOffline(){
  	let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
	console.log('network was disconnected :-(');
	});
  }
  isOnline(){
		  
		  let connectSubscription = this.network.onConnect().subscribe(() => {
		  console.log('network connected!');
		  // We just got a connection but we need to wait briefly
		   // before we determine the connection type. Might need to wait.
		  // prior to doing any api requests as well.
		  setTimeout(() => {
		    if (this.network.type === 'wifi') {
		      console.log('we got a wifi connection, woohoo!');
		    }
		  }, 3000);
		  return true
		});
  }
}
