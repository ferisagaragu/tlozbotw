import { MaterialModel } from "../models/material.model";
import Firebase from "../../shared/firebase.shared";
import { UserDataModel } from "../models/user-data.model";

class MaterialService {

  pathBase: string;
  pathUser: string;
  firebase: Firebase;

  constructor() {
    this.pathBase = 'core/material';
    this.pathUser = 'data/material/';
    this.firebase = new Firebase();
  }

  public getMaterials(userData: UserDataModel, on: Function): void {
    this.firebase.on(this.pathBase,(snapshot: any) => {
      
      if (userData.role !== 1) {
        this.firebase.on(`users/${userData.id}/${this.pathUser}`, (snapshotResp: any) => {
          const data = [ ];
          const userDataJson: any = { };
          const resp = snapshot.val();
          const userResp = snapshotResp.val();
  
          if (!userResp) {
            for (const key in resp) {
              const jsonResp = resp[key];
              userDataJson[jsonResp.id] = { idMaterial: jsonResp.id, check: false };
              data.push(new MaterialModel(jsonResp));
            }
  
            this.firebase.update(`users/${userData.id}/${this.pathUser}`, userDataJson,(error: any) => {});
          } else {
            for (const key in resp) {
              const jsonResp = resp[key];
              jsonResp.check = userResp[key].check;
              data.push(new MaterialModel(jsonResp));
            }
          }
  
          on(data);
        });
      } else {
        const data: any = [];
        const resp = snapshot.val();

        for (let key in resp) {
          const jsonResp = resp[key];
          data.push(new MaterialModel(jsonResp));
        }

        on(data);
      }
    });
  }

  public updateMaterial(id: string, data: MaterialModel, errorFuction: Function): void {
    this.firebase.update(`${this.pathBase}/${id}`, data, (error: any) => {
      errorFuction(error);
    });
  }

  public selectMaterial(userData: UserDataModel, data: MaterialModel, errorFuction: Function): void {
    const dataOut = {
      check: data.check,
      idMaterial: data.id
    };

    this.firebase.update(`users/${userData.id}/${this.pathUser}${data.id}`, dataOut, (error: any) => {
      errorFuction(error);
    });
  }

}

export default MaterialService;