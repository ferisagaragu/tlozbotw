import Firebase from "../../shared/firebase.shared";
import { UserDataModel } from "../models/user-data.model";
import { BowModel } from "../models/bows.model";

class BowService {

  pathBase: string;
  firebase: Firebase;

  constructor() {
    this.pathBase = 'core/bows';
    this.firebase = new Firebase();
  }

  public getBows(userData: UserDataModel, on: Function): void {
    this.firebase.on(this.pathBase,(snapshot: any) => {
      const data: any = [ ];
      const resp = snapshot.val();

      for (let key in resp) {
        const jsonResp = resp[key];
        data.push(new BowModel(jsonResp));
      }

      on(data);
    });
  }

}

export default BowService;