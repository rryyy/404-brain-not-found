import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { TabsPage } from '../tabs/tabs';
import { GetStartedPage } from '../get-started/get-started';

/**
 * Generated class for the BlankPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-blank',
  templateUrl: 'blank.html',
})
export class BlankPage {
 data: any
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  	this.checkAccount();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlankPage');
  }
  checkAccount()
  {
    this.storage.get('userid').then((val) => {
	    if(val){
	      this.navCtrl.push(TabsPage);
	    }
	    else{
	      this.navCtrl.push(GetStartedPage);
	    }
    });
  }
}
