import Firebase from "../../shared/firebase.shared";

class LoginService {

  firebase: Firebase;

  constructor() {
    this.firebase = new Firebase();
  }

  public getUsersData(onFunction: Function) {
    this.firebase.on('users',(snapshot: any) => {
      onFunction(snapshot.val());
    });
  }

  public registerUserData(data: any, errorFunction: Function): void {
    this.firebase.set(`users`,data,errorFunction);
  } 

  public createUser(email: string, password: string, onLogIn: Function, onError: Function): void {
    this.firebase.createUserWithEmailAndPassword(email, password, onLogIn, onError);
  }

  public loginUser(email: string, password: string, onLogIn: Function, onError: Function): void {
    this.firebase.signInWithEmailAndPassword(email, password, onLogIn, onError);
  }

  public loginUserWhitGoogle(onFunction: Function, onError: Function): void {
    this.firebase.signInWithGooglePopup(onFunction,onError);
  }

  public logoutUser(onFunction: Function, onError: Function): void {
    this.firebase.signOut(onFunction,onError);
  }

}

export default LoginService;