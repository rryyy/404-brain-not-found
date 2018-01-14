import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';

import { WritecommentPage } from '../writecomment/writecomment';

import { CommentProvider } from '../../providers/comment/comment';
import { Postcomment } from '../export'; 
/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage {
  postid: any
  comments: any
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public viewCtrl: ViewController,
    public CommentProvider: CommentProvider,
    public modalCtrl: ModalController
    ) {
  }

  ionViewDidLoad() {
      this.postid = this.navParams.get('postid');
      this.GetComment(this.postid);
  }
  onDismiss() 
  {
  	 this.viewCtrl.dismiss();
  }
  postcomment = new Postcomment();
  GetComment(data)
  {
    this.postcomment.id = data;
    this.CommentProvider
      .showComment(this.postcomment)
      .subscribe(Response => {
        this.comments = Response;
        console.log(this.comments);
      })
  }
  WriteComment()
  {
    this.modalCtrl.create(WritecommentPage,{postid: this.postid}).present();
    this.onDismiss();
  }
}
