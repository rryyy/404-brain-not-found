import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import { AlertController } from 'ionic-angular';

import { DashboardPage } from '../dashboard/dashboard';
import { CommentPage } from '../comment/comment';
import { Storage } from '@ionic/storage';
import { PostsProvider } from '../../providers/posts/posts';

import { postsLocation } from '../export'; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	lat: any; lang: any
	x: number; y: number
	thoroughfare: any; locality: any
  subAdministrativeArea: any; posts: any
  postlocality: any; postsubAdmin: any;
  loadfirst: any;
  constructor (
  	public navCtrl: NavController, private geolocation: Geolocation, private nativeGeocoder: NativeGeocoder,
  	public alertCtrl: AlertController, private PostsProvider: PostsProvider, public navParams: NavParams, 
    public storage: Storage, public modalCtrl: ModalController ) 
    {
     this.GetPosts();
    }
  ionViewDidLoad() {
  	this.Locate();  
    // this.GetPosts();
  }
  Dashboard()
  {
    this.navCtrl.push(DashboardPage);
  }
  Locate()
  {
  	this.geolocation.getCurrentPosition().then((resp) => {
		 console.log(resp.coords.latitude,resp.coords.longitude);
		 this.x = resp.coords.latitude;
		 this.y = resp.coords.longitude;
		 this.ReverseGeocode(resp.coords.latitude,resp.coords.longitude);
	  }).catch((error) => {
  			console.log('Error getting location', error);
	  });
  }
  ReverseGeocode(lat, long)
  {
  	this.nativeGeocoder.reverseGeocode(lat, long)
 	 .then((result: NativeGeocoderReverseResult) => 
 	         this.showLocation(this.thoroughfare = JSON.stringify(result.thoroughfare),
                              this.locality = JSON.stringify(result.locality),
                              this.subAdministrativeArea = JSON.stringify(result.subAdministrativeArea)),
      )
 	 .catch((error: any) => console.log(error)); 
  }
   showLocation(thoroughfare,locality,subAdministrativeArea) 
   {
     //saving to cache
     this.storage.set('thoroughfare', thoroughfare.replace('"','').replace('"',''));
     this.storage.set('locality', locality.replace('"','').replace('"',''));
     this.storage.set('subAdministrativeArea', subAdministrativeArea.replace('"','').replace('"',''));
     //creating alert
     let alert = this.alertCtrl.create({
       title: 'Location',
       subTitle: "You are here in" + " " + thoroughfare.replace('"','').replace('"','') + " " + locality.replace('"','').replace('"','') +  " " + subAdministrativeArea.replace('"','').replace('"',''),  
       buttons: ['OK']
     });
     alert.present();
   }
  GetPosts() {
    this.loadfirst = "allposts";
    this.PostsProvider
      .showPosts()
      .subscribe(posts => {
        this.posts = posts;
        // console.log(this.posts);
      })
    // console.log(this.log)
  }
  postlocation = new postsLocation();
  NearbyPosts() {
     this.storage.get("locality").then((val) => {
         this.postlocality = val;
     })
     this.postlocation.location = this.postlocality;
    console.log(this.postlocation.location);
     let alert = this.alertCtrl.create({
       title: 'Location',
       subTitle: this.postlocation.location,  
       buttons: ['OK']
     });
     alert.present();
    this.loadfirst = "nearby";
    this.PostsProvider
      .nearbypost(this.postlocation.location)
      .subscribe(posts => {
        this.posts = posts;
        console.log(this.posts);
      })
    // console.log(this.log)
  }
  CommentPage(id)
  {
    this.modalCtrl.create(CommentPage, {
      postid: id
    }).present();
  }
  onSwipeTry(e){
    if(e.direction == '2'){
       this.GetPosts();
    }
    else if(e.direction == '4'){
      this.NearbyPosts();
    }
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 1000);
  }
}
