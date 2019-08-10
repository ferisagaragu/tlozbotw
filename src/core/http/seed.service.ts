import Firebase from "../../shared/firebase.shared";
import { SeedModel } from "../models/seed.model";

class SeedService {

  firebase: Firebase;
  baseUrl: string;

  constructor() {
    this.firebase = new Firebase();
    this.baseUrl = 'core/seeds'
  }

  public getSeeds(regionId: string ,onFunction: Function) {
    this.firebase.on(`${this.baseUrl}/${regionId}`,(snapshot: any) => {
      const resp = snapshot.val();
      let data: any = [];
      let videoUrl = null;

      console.log(resp);

      if (resp) {
        videoUrl = resp.videoUrl;
        delete resp.videoUrl;

        for (let key in resp) {
          const jsonResp = resp[key];
          data.push(new SeedModel(jsonResp));
        }
      }

      onFunction(data, videoUrl);
    });
  }

}

export default SeedService;