import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

import { SignupPage } from '../signup/signup';
<<<<<<< HEAD
import { DashboardPage } from '../dashboard/dashboard';
import { TabsPage } from '../tabs/tabs';

import { SigninProvider } from '../../providers/signin/signin';
import { Account } from '../account';
=======
>>>>>>> 67fd3926a1ea1e29d96366046a801dc589cf1eec
/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})

export class SigninPage {
  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams, 
      private http: Http,
      private SigninProvider: SigninProvider
      ) {
  }
  profiles: any;
  GetStarted() {
    this.navCtrl.push(SignupPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }
  // tryapiShow() {
  //   this.SigninProvider
  //     .showAllData()
  //     .subscribe(profiles => {
  //       this.profiles = profiles;
  //       console.log(this.profiles);
  //     })
  //   // console.log(this.log)
  // }
     log = new Account();
      SignIn() {
          this.SigninProvider
              .SignInAccount(this.log)
              .subscribe(response => {
                    console.log(response);
          })
            console.log(this.log)
      }

}
