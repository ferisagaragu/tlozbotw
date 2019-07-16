import { Action } from '../interfaces/action.interface';
import { NewsModel } from '../models/news.model';
import NewsService from '../http/news.service';
import { NewsReducerEnum } from '../enums/news-reducer.enum';

const newsService: NewsService = new NewsService();

export function setNews(payload: Array<NewsModel>): Action {
  return {type: NewsReducerEnum.SET_NEWS, payload};
}

export function getNews(): Function {
  return async (dispatch: Function) => {
    newsService.getNews((news: Array<NewsModel>) => {
      console.log()
      dispatch(setNews(news));
    });
  };
};