import { Action } from "../interfaces/action.interface";
import { LoginReducerEnum } from "../enums/login-reducer.enum";

export const userData = (state = {}, action: Action) => {
  switch(action.type) {
    case LoginReducerEnum.LOGIN: return action.payload;
    case LoginReducerEnum.LOGOUT: return action.payload;
    default: return state;
  }
}