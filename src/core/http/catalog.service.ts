import Firebase from "../../shared/firebase.shared";
import { RegionModel } from "../models/region.model";

class CatalogService {

  firebase: Firebase;
  baseUrl: string;

  constructor() {
    this.firebase = new Firebase();
    this.baseUrl = 'cat'
  }

  public getCatalogRegions(onFunction: Function) {
    this.firebase.on(`${this.baseUrl}/regions`,(snapshot: any) => {
      onFunction(snapshot.val().map((data: any) => new RegionModel(data)));
    });
  }

}

export default CatalogService;