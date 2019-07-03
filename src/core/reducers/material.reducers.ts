import { Action } from "../interfaces/action.interface";
import { MaterialReducerEnum } from '../enums/material-reducer.enum';

export const materials = (state = {}, action: Action) => {
  switch(action.type) {
    case MaterialReducerEnum.SET_MATERIALS: return action.payload;
    default: return state;
  }
}
