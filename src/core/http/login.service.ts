import Firebase from "../../shared/firebase.shared";

class LoginService {

  firebase: Firebase;

  constructor() {
    this.firebase = new Firebase();
  }

  public loginUser(onFunction: Function, onError: Function): void {
    this.firebase.signInWithGooglePopup(onFunction,onError);
  }

  public logoutUser(onFunction: Function, onError: Function): void {
    this.firebase.signOut(onFunction,onError);
  }

}

export default LoginService;