import Firebase from "../../shared/firebase.shared";
import { NewsModel } from "../models/news.model";

class NewsService {

  pathBase: string;
  pathUser: string;
  firebase: Firebase;

  constructor() {
    this.pathBase = 'core/home';
    this.pathUser = 'users/';
    this.firebase = new Firebase();
  }

  public getNews(on: Function): void {
    this.firebase.on(this.pathBase,(snapshot: any) => {
      const data = [];
      const resp = snapshot.val();

      for (let key in resp) {
        data.push(resp[key]);
      }

      on(data.reverse().map((dataModel: any) => (new NewsModel(dataModel))));
    });
  }

  public updateNews(id: string,data: NewsModel, errorFuction: Function): void {
    this.firebase.update(`${this.pathBase}/${id}`, data, (error: any) => {
      errorFuction(error);
    });
  }

  public likeNews(id: string, newsId: string): void {
    this.firebase.once(`${this.pathUser}${id}/data/home/${newsId}`,(snapshot: any) => {
      const resp = snapshot.val();
      let data: any = { };

      if (resp) {
        data = {
          [newsId]: {
            like: !resp.like,
            dislike: false,
            newsId: newsId
          }
        }
      } else {
        data = {
          [newsId]: {
            like: true,
            dislike: false,
            newsId: newsId
          }
        }
      }

      this.firebase.update(`${this.pathUser}${id}/data/home/`, data, (error: any) => {
        console.log(error);
      });

      let dataLike = {
        like: 0
      }

      this.firebase.update(`${this.pathBase}/${newsId}`, dataLike, (error: any) => {
        console.log(error);
      });
    });
  }
}

export default NewsService;