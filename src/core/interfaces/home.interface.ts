import { UserDataModel } from "../models/user-data.model";
import { NewsModel } from "../models/news.model";

export interface HomePropsIterface {
  userData: UserDataModel;
  news: Array<NewsModel>;
  getNews: Function;
  createNews: Function;
  updateNews: Function;
  deleteNews: Function;
  like: Function;
}

export interface HomeStateIterface {
  show: boolean;
  selectedNew: NewsModel;
}

export interface FormNewsPropsIterface {
  initialValues: any,
  handleSubmit: any,
  cancel: any,
  submitting: any,
  submitActions: Function
}

export interface FormNewsStateIterface {
  urlIcon: string;
}

export interface CardNewsPropsIterface {
  news: Array<NewsModel>;
  userData: UserDataModel;
  onEditNews: Function;
  onDeleteNews: Function;
  onLike: Function;
}

export interface ButtonLikeNewsPropsInterface {
  isLike: boolean;
  likeCount: number;
  onLike: Function;
}

export interface ButtonLikeNewsStateInterface {
  likeAnimation: string;
}
