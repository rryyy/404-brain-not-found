import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http'; 

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
/*
  Generated class for the PostsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostsProvider {
  headers: Headers = new Headers;
  options: any;
  constructor(public http: Http) {
    	this.headers.append('enctype', 'multipart/form-data');
    	this.headers.append('Access-Control-Allow-Origin', '*');
    	this.headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
      	this.headers.append('Content-Type', 'application/json');
        this.headers.append('X-Requested-With', 'XMLHttpRequest');  
        this.options = new RequestOptions ({ headers: this.headers });
  }
  showPosts() 
  {
  	return this.http.get('http://127.0.0.1:8000/api/posts').map(res=>res.json());
  }
  addPosts(data) 
  {
     var info = JSON.stringify(data);
     return this.http.post('http://127.0.0.1:8000/api/addpost',info, this.options).map(res=>res.json());  
  }
}
