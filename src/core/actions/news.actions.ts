import { Action } from '../interfaces/action.interface';
import { NewsModel } from '../models/news.model';
import NewsService from '../http/news.service';
import { NewsReducerEnum } from '../enums/news-reducer.enum';
import { toast } from '../../shared/swal.shared';
import key from '../key/react-elements.key';

const newsService: NewsService = new NewsService();

export function setNews(payload: Array<NewsModel>): Action {
  return {type: NewsReducerEnum.SET_NEWS, payload};
}

export function getNews(): Function {
  return async (dispatch: Function) => {
    newsService.getNews((news: Array<NewsModel>) => {
      dispatch(setNews(news));
    });
  };
};

export function updateNews(data: NewsModel): Function {
  return async (dispatch: Function) => {
    newsService.updateNews(data.id, data, (error: any) => {});
    toast('info', `${data.title} actualizado.`);
  };
}

export function createNews(data: NewsModel): Function {
  return async (dispatch: Function) => {
    data.id = key();
    newsService.updateNews(data.id, data, (error: any) => {});
    toast('success', `${data.title} ha sido creado.`);
  };
}

export function like(data: NewsModel): Function {
  return async (dispatch: Function) => {
    console.log(data);
    /*data.like++;
    newsService.updateNews(data.id, data, (error: any) => {});
    newsService.likeNews('FNfi3a5O8sNOI7B3v1HOoCBckOE2',data.id);*/
  };
}