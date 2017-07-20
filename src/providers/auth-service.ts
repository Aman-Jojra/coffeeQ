import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
// Do not import from 'firebase' as you'll lose the tree shaking benefits
import * as firebase from 'firebase';
// import firebase from 'firebase';

@Injectable()
export class AuthServiceProvider {
  private currentUser: firebase.User;

  constructor(public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe((user: firebase.User) => this.currentUser = user);
  }

  loginUser(email: string, password: string): firebase.Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
}

signupUser(email: string, password: string): firebase.Promise<any> {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then( newUser => {
        firebase.database().ref('/userProfile').child(newUser.uid)
        .set({ email: email });
  });
}
resetPassword(email: string): firebase.Promise<void> {
  return firebase.auth().sendPasswordResetEmail(email);
}
logoutUser(): firebase.Promise<void> {
  return firebase.auth().signOut();
}
}