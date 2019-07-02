import { Action } from "../interfaces/action.interface";
import { ExampleEnum } from '../enums/material-reducer.enum';

export const materials = (state = {}, action: Action) => {
  switch(action.type) {
    case ExampleEnum.SET_MATERIALS: return action.payload;
    default: return state;
  }
}
