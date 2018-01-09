import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';


import { SignupProvider } from '../../providers/signup/signup';
import { Register } from '../export';

import { SigninPage } from '../signin/signin';
import { TabsPage } from '../tabs/tabs';
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
 private registration : FormGroup;
 userid: any
 useremail: any
 name: any
  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams, 
      private http: Http,
      private SignupProvider: SignupProvider,
      public alertCtrl: AlertController,
      private formBuilder: FormBuilder,
      public storage: Storage
  	) {
  this.registration = this.formBuilder.group({
      name: ['', Validators.required],
      contact: ['',Validators.required],
      location: ['',Validators.required],
      username: ['',Validators.required],
      password: ['',Validators.required]
    });
  }
  reg = new Register();
  RegisterUser() {
  	console.log(this.reg);
  		this.SignupProvider
  			.SignupAccount(this.reg)
  				.subscribe(response => {
  					if(response.status){
                  this.userid = response.last_insert_id;
                  this.useremail = this.reg.email;
                  this.name = this.reg.name;
                  this.storage.set('userid', this.userid);
                  this.storage.set('email', this.useremail);
                  this.storage.set('name', this.name);
                  console.log(this.userid,this.useremail,this.name);
              this.navCtrl.push(TabsPage);
            }
            else{
              this.showErrorLogin();
            }
  				})
  }
  SignIn()
  {
    this.navCtrl.push(SigninPage);
  }
   showErrorLogin() 
   {
     let alert = this.alertCtrl.create({
       title: 'Something went Wrong',
       subTitle: 'Please check if all fields is valid',
       buttons: ['OK']
     });
     alert.present();
   }
}
