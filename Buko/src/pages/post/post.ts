import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';

import { FeelingPage } from '../feeling/feeling';
import { TabsPage } from '../tabs/tabs';

import { Post } from '../export';

import { PostsProvider } from '../../providers/posts/posts';

import { Storage } from '@ionic/storage';

/**
 * Generated class for the PostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {
  hide: boolean
  car: any
  feel:any
  rate: any
  name: any
  id: any
  location: any
  x: any
  y: any
  z:any
  
  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	private storage: Storage,
    public modalCtrl: ModalController,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    private postsProvider: PostsProvider)
  	 {
  }
  ionViewDidLoad() {
    this.GetUserName();
    this.GetCarType();
    this.GetFeeling();
    this.GetRate()
    this.GetUserId();
    this.Locate();
    this.hide = true;
    
  }
  GetCarType()
  {
    this.car = this.navParams.get('cartype');
    console.log(this.car);
  }
  GetFeeling()
  {
      this.feel = this.navParams.get('feeling');
      console.log(this.feel);
  }
  GetRate()
  {
    this.rate = this.navParams.get('rate');
    console.log(this.rate);
  }
  GetUserName()
  {
       this.storage.get('name').then((val) => {
              this.name = val;
              console.log(this.name);
      });    
  }
  GetUserId()
  {
       this.storage.get('userid').then((val) => {
              this.id = val;
              console.log(this.id);
      });    
  }
  FeelingModal() {
    // this.modalCtrl.create(FeelingPage).present();
    this.navCtrl.push(FeelingPage);
  }
  post = new Post();
  Post()
  {
    this.post.name = this.id;
    this.post.car = this.car;
    this.post.feeling = this.feel;
    this.post.rating = this.rate;
    this.post.location = "olongapo, zambales";
    this.storage.set('cartype', null);
    this.storage.set('feel', null);
    console.log(this.post);
      this.postsProvider
        .addPosts(this.post)
          .subscribe(response => {
            console.log(response);
            this.navCtrl.push(TabsPage);
          })
  }
  HomePage()
  {
    this.storage.set('cartype', null);
    this.storage.set('feel', null);
    this.navCtrl.push(TabsPage);
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
      this.z = JSON.stringify(result))
    .catch((error: any) => console.log(error));
  }
}
