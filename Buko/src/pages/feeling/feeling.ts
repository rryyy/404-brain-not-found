import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ViewController } from 'ionic-angular';

import { PostPage } from '../post/post';

import { Storage } from '@ionic/storage';
/**
 * Generated class for the FeelingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feeling',
  templateUrl: 'feeling.html',
})
export class FeelingPage {
  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public viewCtrl: ViewController,
  	public storage: Storage
  	) {
  }	
  cartype: any;
  ionViewDidLoad() {
    this.cartype = this.navParams.get('cartype');
  }
  onFeel(feeling,rate) 
  {
  	this.navCtrl.push(PostPage, {
      feeling: feeling,
      rate: rate,
      cartype: this.cartype
    });
    // this.viewCtrl.dismiss();
  }
  // onFeel(feeling) 
  // {
  // 	this.storage.set('feel', feeling);
  // 	this.onDismiss();
  // }
}
