export class NewsModel {

  id: string;
  title: string;
  information: string;
  like: number;
  dislike: number;
  img: string;

  constructor(data: any | NewsModel) {
    this.id = "";
    this.title = "";
    this.information = "";
    this.like = 0;
    this.dislike = 0;
    this.img = "";

    Object.assign(this, data);
  }
}