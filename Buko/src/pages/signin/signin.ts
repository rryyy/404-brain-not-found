import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';

import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';

import { SigninProvider } from '../../providers/signin/signin';
import { Account } from '../account';
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
      private SigninProvider: SigninProvider,
      public alertCtrl: AlertController
      ) {
  }
  profiles: any;
  SignupPage() {
    this.navCtrl.push(SignupPage);
  }
  TabsPage() {
    this.navCtrl.push(TabsPage);
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
                if (response.length == 0) {
                  this.showErrorLogin();
                } else {
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

}
