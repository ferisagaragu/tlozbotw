import Firebase from "../../shared/firebase.shared";
import { NewsModel } from "../models/news.model";

class NewsService {

  pathBase: string;
  firebase: Firebase;

  constructor() {
    this.pathBase = 'core/home';
    this.firebase = new Firebase();
  }

  public getNews(on: Function): void {
    this.firebase.on(this.pathBase,(snapshot: any) => {
      on(snapshot.val().map((data: any) => (new NewsModel(data))));
    });
  }

}

export default NewsService;