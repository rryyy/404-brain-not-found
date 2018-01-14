import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

import { CommentPage } from '../comment/comment';

import { CommentProvider } from '../../providers/comment/comment';
import { Storage } from '@ionic/storage';

import { Comment } from '../export';

/**
 * Generated class for the WritecommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-writecomment',
  templateUrl: 'writecomment.html',
})
export class WritecommentPage {
	postid: any
	id: any
  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams, 
  	public viewCtrl: ViewController,
  	public modalCtrl: ModalController,
  	public CommentProvider: CommentProvider,
  	public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WritecommentPage');
    this.postid = this.navParams.get('postid');
    this.GetUserId();
  }
  GetUserId()
  {
       this.storage.get('userid').then((val) => {
              this.id = val;
              console.log(this.id);
      });    
  }
  CommentPage()
  {
  	this.modalCtrl.create(CommentPage, {postid: this.postid}).present();
  	this.viewCtrl.dismiss();
  }
  comment = new Comment();
  AddComment()
  {
  	this.comment.postid = this.postid;
  	this.comment.userid = this.id;
  	 console.log(this.comment);
  	this.CommentProvider
  		.addComment(this.comment)
  		.subscribe(response=>{
  			console.log(response);
  			if(response.status == '200')
  			{
  				this.CommentPage();
  			}
  		})
  }

}
