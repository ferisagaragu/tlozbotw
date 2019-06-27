import { MaterialModel } from "../models/material.model";
import Firebase from "../../shared/firebase.shared";


class MaterialService {

  pathBase: string;
  firebase: Firebase;

  constructor() {
    this.pathBase = 'core/material';
    this.firebase = new Firebase();
  }

  public getMaterials(on: Function): void {
    this.firebase.on(this.pathBase,(snapshot: any) => {
      on(snapshot.val().map((data: any) => (new MaterialModel(data))));
    });
  }

}

export default MaterialService;