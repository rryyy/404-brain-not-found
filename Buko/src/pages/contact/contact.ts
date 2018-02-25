import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { UserId } from '../export';
import { SigninProvider } from '../../providers/signin/signin';
import { SigninPage } from '../signin/signin';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
 id: any
 name: any
 contact: any
 location: any
  constructor(
  	public navCtrl: NavController,
  	private storage: Storage,
 	private SigninProvider: SigninProvider
  	) {

  }
 ionViewDidLoad() {
  	this.GetUserId();
  }
  GetUserId()
  {
     this.storage.get('userid').then((val) => {
            this.id = val;
            // console.log(this.id);
            this.GetUserInfo();
    });
  }
  userid = new UserId();
  GetUserInfo()
  {
  	this.userid.id = this.id;
  	console.log(this.userid.id);
    this.SigninProvider
      .GetAccount(this.userid)
      .subscribe(response => {
        this.name = response.name;
        this.contact = response.contact;
        this.location = response.address;
        console.log(response);
        console.log(this.name, this.contact, this.location);
      })
  }
  Signout()
  {
    this.storage.set('userid', null);
    this.storage.set('email', null);
    this.storage.set('name', null);
    this.navCtrl.push(SigninPage);
  }

}
