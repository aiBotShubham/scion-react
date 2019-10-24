import app from "firebase/app";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyBKW2B6RZH87ykvFJZeomkbfKbwtvfIrc4",
  authDomain: "scion-4d148.firebaseapp.com",
  databaseURL: "https://scion-4d148.firebaseio.com",
  projectId: "scion-4d148",
  storageBucket: "scion-4d148.appspot.com",
  messagingSenderId: "679879724449",
  appId: "1:679879724449:web:24c7674e084a2fde5a8fe0",
  measurementId: "G-F955KK6MF5"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();
}
export default Firebase;
