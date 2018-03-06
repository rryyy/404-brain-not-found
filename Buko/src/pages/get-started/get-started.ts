import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { SigninPage } from '../signin/signin';
// import { SignupPage } from '../signup/signup';
import { AboutappPage } from '../aboutapp/aboutapp';


/**
 * Generated class for the GetStartedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-get-started',
  templateUrl: 'get-started.html',
})
export class GetStartedPage {
  data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }
  ionViewDidLoad() {
  }
  SignInPage() {
      this.navCtrl.push(SigninPage);
  }
  Aboutapp() {
    this.navCtrl.push(AboutappPage);
  }
}
