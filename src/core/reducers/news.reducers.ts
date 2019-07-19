import { Action } from "../interfaces/action.interface";
import { NewsReducerEnum } from "../enums/news-reducer.enum";

export const news = (state = {}, action: Action) => {
  switch(action.type) {
    case NewsReducerEnum.SET_NEWS: return action.payload;
    default: return state;
  }
}