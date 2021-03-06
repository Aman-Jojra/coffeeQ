import { Component } from '@angular/core';
import {
  IonicPage, 
  Loading,
  LoadingController, 
  NavController,
  AlertController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EmailValidator } from '../../validators/email';
//import { AuthProvider } from '../../providers/auth/auth';

import { AuthServiceProvider } from '../../providers/auth-service';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public loginForm:FormGroup;
  public loading:Loading;
  constructor(public navCtrl: NavController, 
    public loadingCtrl: LoadingController, public alertCtrl: AlertController, 
    public authProvider: AuthServiceProvider, public formBuilder: FormBuilder) {
      this.loginForm = formBuilder.group({
      email: ['aman.jojra@accenture.com', Validators.compose([Validators.required, 
        EmailValidator.isValid])],
      password: ['qwerty', Validators.compose([Validators.minLength(6), 
        Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goToSignup(): void { this.navCtrl.push('signup'); }

goToResetPassword(): void { this.navCtrl.push('reset-password'); }

  loginUser(): void {
  if (!this.loginForm.valid){
    console.log(this.loginForm.value);
  } else {
    this.authProvider.loginUser(this.loginForm.value.email, 
        this.loginForm.value.password)
    .then( authData => {
      this.loading.dismiss().then( () => {
        this.navCtrl.setRoot(HomePage);
      });
    }, error => {
      this.loading.dismiss().then( () => {
        let alert = this.alertCtrl.create({
          message: error.message,
          buttons: [
            {
              text: "Ok",
              role: 'cancel'
            }
          ]
        });
        alert.present();
      });
    });
    this.loading = this.loadingCtrl.create();
    this.loading.present();
  }
}

}
