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


export function createUser(username: string, password: string): Function {
  return async (dispatch: Function) => {
    loginService.createUser(username, password,
      (user: any) =>{
        toast('success', `Usuario registrado con el correo ${user.email}`);
      },(error: any)=>{
        toast('error', `Error al registrar el nuevo usuario`);
      }
    );
  };
};

export function login(username: string, password: string): Function {
  return async (dispatch: Function) => {
    loginService.loginUser(username, password,
      (user: any) =>{
        dispatch(loginUser(user));
        toast('success', `Bienvenid@ ${user.displayName}`);
        
        let data = {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          phoneNumber: user.phoneNumber,
          photo: user.photoURL
        };
    
        loginService.getUsersData((userData: any) => {
          userData[user.uid] = data;
          loginService.registerUserData(userData,() => {});
        });

      },(error: any)=>{
        toast('error', `Error al iniciar sesión`);
      }
    );
  };
};

export function loginWhitGoogle(): Function {
  return async (dispatch: Function) => {
    loginService.loginUserWhitGoogle(
      (token: any, user: any)=>{
        dispatch(loginUser(user));
        toast('success', `Bienvenid@ ${user.displayName}`);
        
        let data = {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          phoneNumber: user.phoneNumber,
          photo: user.photoURL
        };
    
        loginService.getUsersData((userData: any) => {
          userData[user.uid] = data;
          loginService.registerUserData(userData,() => {});
        });

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