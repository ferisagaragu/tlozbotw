import { Action } from "../interfaces/action.interface";
import { LoginReducerEnum } from "../enums/login-reducer.enum";

export const userData = (state = {}, action: Action) => {
  switch(action.type) {
    case LoginReducerEnum.LOGIN:
      const userData = {
        id: action.payload.uid,
        name: action.payload.displayName,
        email: action.payload.email,
        phoneNumber: action.payload.phoneNumber,
        photo: action.payload.photoURL
      }
    return userData;
    case LoginReducerEnum.LOGOUT: return action.payload;
    default: return state;
  }
}