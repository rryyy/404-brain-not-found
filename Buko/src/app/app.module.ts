  import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { GetStartedPage } from '../pages/get-started/get-started';
import { SignupPage } from '../pages/signup/signup';
import { SigninPage } from '../pages/signin/signin';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { PostPage } from '../pages/post/post';
import { FeelingPage } from '../pages/feeling/feeling';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { IonicStorageModule } from '@ionic/storage';

import { SigninProvider } from '../providers/signin/signin';
import { SignupProvider } from '../providers/signup/signup';
import { PostsProvider } from '../providers/posts/posts';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    GetStartedPage,
    SignupPage,
    SigninPage,
    DashboardPage,
    PostPage,
    FeelingPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    GetStartedPage,
    SignupPage,
    SigninPage,
    DashboardPage,
    PostPage,
    FeelingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    NativeGeocoder,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SigninProvider,
    SignupProvider,
    PostsProvider,
  ]
})
export class AppModule {}
