import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';

import { AngularFireAuth } from 'angularfire2/auth';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
//
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AuthServiceProvider } from '../providers/auth-service';


export const firebaseConfig = {
    apiKey: "AIzaSyDCqYYh9QbXuqhGJAqFTBXR_UXN_ZuquQg",
    authDomain: "coffeeq-d1bce.firebaseapp.com",
    databaseURL: "https://coffeeq-d1bce.firebaseio.com",
    projectId: "coffeeq-d1bce",
    storageBucket: "coffeeq-d1bce.appspot.com",
    messagingSenderId: "515997097507"
  };

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    TabsPage,
    ResetPasswordPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    TabsPage,
    ResetPasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    AngularFireAuth
  ]
})
export class AppModule {}
