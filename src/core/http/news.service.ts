import Firebase from "../../shared/firebase.shared";
import { NewsModel } from "../models/news.model";
import { UserDataModel } from "../models/user-data.model";

class NewsService {

  pathBase: string;
  pathUser: string;
  firebase: Firebase;

  constructor() {
    this.pathBase = 'core/home';
    this.pathUser = 'data/home/';
    this.firebase = new Firebase();
  }

  public getNews(userData: UserDataModel, on: Function): void {
    this.firebase.on(this.pathBase,(snapshot: any) => { 

      if (userData.role !== 1) {
        this.firebase.on(`users/${userData.id}/${this.pathUser}`, (snapshotResp: any) => {
          const data: any = [];
          const userDataJson: any = { };
          const resp = snapshot.val();
          const userResp = snapshotResp.val();
  
          if (!userResp) {
            for (let key in resp) {
              const jsonResp = resp[key];
              data.push(new NewsModel(jsonResp));
              userDataJson[jsonResp.id] = { like: false, newsId: jsonResp.id };
            }
  
            this.firebase.update(`users/${userData.id}/${this.pathUser}`, userDataJson,(error: any) => {});
          } else {
            for (let key in resp) {
              let jsonResp = resp[key];

              if (!userResp[key]) {
                userDataJson[jsonResp.id] = { like: false, newsId: jsonResp.id };
                jsonResp.isLike = false;
              } else {
                jsonResp.isLike = userResp[key].like;
              }
                
              data.push(new NewsModel(jsonResp));
            }
            
            this.firebase.update(`users/${userData.id}/${this.pathUser}`, userDataJson,(error: any) => {});
          }
  
          on(data.reverse());
        });
      } else {
        const data: any = [];
        const resp = snapshot.val();

        for (let key in resp) {
          const jsonResp = resp[key];
          data.push(new NewsModel(jsonResp));
        }

        on(data.reverse());
      }
    });
  }

  public updateNews(id: string,data: NewsModel, errorFuction: Function): void {
    this.firebase.update(`${this.pathBase}/${id}`, data, (error: any) => {
      errorFuction(error);
    });
  }

  public likeNews(userData: UserDataModel, data: NewsModel) {
    this.firebase.once(`users/${userData.id}/${this.pathUser}/${data.id}`, (snapshotResp: any) => { 
      const respUser = snapshotResp.val();
      let { id, img, information, like, title } = data;

      if (respUser.like) {
        like = like - 1;
        respUser.like = false;
      } else {
        like = like + 1;
        respUser.like = true;
      }
      
      let newsData = {
        id,
        img,
        information,
        like,
        title
      };

      this.firebase.update(`users/${userData.id}/${this.pathUser}/${data.id}`, respUser,(error: any) => {});
      this.firebase.update(`/core/home/${data.id}`, newsData,(error: any) => {});
    });
  }

  public deleteNews(data: NewsModel, errorFuction: Function) {
    this.firebase.remove(`${this.pathBase}/${data.id}`, (error: any) => {
      errorFuction(error);
    });
  }

}

export default NewsService;