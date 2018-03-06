import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';

import { SigninProvider } from '../../providers/signin/signin';
import { Account } from '../export';
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
      private SigninProvider: SigninProvider,
      public alertCtrl: AlertController,
      public storage: Storage,
      private fb: Facebook
      ) {
  }
  profiles: any;
  userid: any;
  useremail: any;
  name: any;
  SignupPage() {
    this.navCtrl.push(SignupPage);
  }
  TabsPage() {
    this.navCtrl.push(TabsPage);
  }
  log = new Account();
  SignIn() {
    this.SigninProvider
      .SignInAccount(this.log)
         .subscribe(response => {
            if (response.length == 0) {
              this.showErrorLogin();
            } else {
              this.userid = response[0].id;
              this.useremail = response[0].email;
              this.name = response[0].name;
              this.storage.set('userid', this.userid);
              this.storage.set('email', this.useremail);
              this.storage.set('name', this.name);
              this.TabsPage();            
            }
      })
  }
  showErrorLogin() 
  {
     let alert = this.alertCtrl.create({
       title: 'Somethings Wrong',
       subTitle: 'Incorrect password or username!',
       buttons: ['OK']
     });
     alert.present();
  }
  facebookLogin()
  {
     this.fb.login(['public_profile', 'user_friends', 'email'])
    .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
    .catch(e => console.log('Error logging into Facebook', e));
    // this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
  }
}
