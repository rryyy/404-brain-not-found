import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';

import { SignupProvider } from '../../providers/signup/signup';
import { Register } from '../register';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams, 
      private http: Http,
      private SignupProvider: SignupProvider,
      public alertCtrl: AlertController
  	) {
  }
  reg = new Register();
  RegisterUser() {
  	console.log(this.reg);
  		this.SignupProvider
  			.SignupAccount(this.reg)
  				.subscribe(response => {
  					console.log(response);
  				})
  }


}
