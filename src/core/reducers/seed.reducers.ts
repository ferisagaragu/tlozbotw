import { Action } from "../interfaces/action.interface";
import { SeedReducerEnum } from "../enums/seed-reducer.enum";

export const seeds = (state = {}, action: Action) => {
  switch(action.type) {
    case SeedReducerEnum.SET_SEEDS: return action.payload;
    default: return state;
  }
}

export const videoUrl = (state = {}, action: Action) => {
  switch(action.type) {
    case SeedReducerEnum.SET_VIDEOURL: return action.payload;
    default: return state;
  }
}