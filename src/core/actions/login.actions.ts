import { Action } from '../interfaces/action.interface';
import LoginService from '../http/login.service';
import { LoginReducerEnum } from '../enums/login-reducer.enum';
import { toast } from '../../shared/swal.shared';

const loginService: LoginService = new LoginService();

export function loginUser(payload: any): Action {
  return {type: LoginReducerEnum.LOGIN, payload};
}

export function logoutUser(): Action {
  return {type: LoginReducerEnum.LOGOUT, payload: null};
}

export function login(): Function {
  return async (dispatch: Function) => {
    loginService.loginUser(
      (token: any, user: any)=>{
        dispatch(loginUser(user));
        toast('success', `Bienvenid@ ${user.displayName}`);
      },(errorCode: any, errorMessage: any) => { 
        toast('error', `Error al iniciar sesión`);
      }
    );
  };
};

export function logout(): Function { 
  return async (dispatch: Function) => {
    loginService.logoutUser(
      ()=>{
        dispatch(logoutUser());
        toast('success', `Sesión cerrada`);
      },(error: any) => { 
        console.log(error);
        toast('error', 'Error al cerrar sesión');
      }
    );
  };
};