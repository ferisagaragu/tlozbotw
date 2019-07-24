import { Action } from "../interfaces/action.interface";
import { BowsReducerEnum } from "../enums/bows-reducer.enum";

export const bows = (state = {}, action: Action) => {
  switch(action.type) {
    case BowsReducerEnum.SET_BOWS: return action.payload;
    default: return state;
  }
}
