export class NewsModel {

  id: string;
  title: string;
  information: string;
  like: number;
  isLike: boolean;
  img: string;

  constructor(data: any | NewsModel) {
    this.id = "";
    this.title = "";
    this.information = "";
    this.like = 0;
    this.isLike = false;
    this.img = "";

    Object.assign(this, data);
  }
}