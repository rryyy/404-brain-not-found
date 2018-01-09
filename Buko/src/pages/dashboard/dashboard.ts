import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { PostPage } from '../post/post';
import { FeelingPage } from '../feeling/feeling';
/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	private storage: Storage) {
  }
  ionViewDidLoad() {
  }
  PostPage(puv)
  {
    this.storage.set('cartype', puv);
    this.navCtrl.push(FeelingPage);
  }
}
