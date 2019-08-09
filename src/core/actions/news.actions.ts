import { Action } from '../interfaces/action.interface';
import { NewsModel } from '../models/news.model';
import NewsService from '../http/news.service';
import { NewsReducerEnum } from '../enums/news-reducer.enum';
import { toast } from '../../shared/swal.shared';
import key from '../key/react-elements.key';
import { UserDataModel } from '../models/user-data.model';

const newsService: NewsService = new NewsService();

export function setNews(payload: Array<NewsModel>): Action {
  return {type: NewsReducerEnum.SET_NEWS, payload};
}

export function getNews(userData: UserDataModel): Function {
  return async (dispatch: Function) => {
    newsService.getNews(userData,(news: Array<NewsModel>) => {
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

export function like(data: NewsModel,userData: UserDataModel): Function {
  return async (dispatch: Function) => {
    newsService.likeNews(userData, data);
  };
}

export function deleteNews(data: NewsModel): Function {
  return async (dispatch: Function) => {
    newsService.deleteNews(data, (error: any) => {});
    toast('success', `${data.title} fue eliminado.`);
  };
}