import { Action } from '../interfaces/action.interface';
import LoginService from '../http/login.service';
import { LoginReducerEnum } from '../enums/login-reducer.enum';
import { toast } from '../../shared/swal.shared';
import { UserDataModel } from '../models/user-data.model';

const loginService: LoginService = new LoginService();
let userData: UserDataModel;

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

export function loginWhitGoogle(): Function {
  return async (dispatch: Function) => {
    loginService.loginUserWhitGoogle(
      (token: any, user: any)=>{
        if (user) {
          registUserData(user, dispatch);
        }
      },(errorCode: any, errorMessage: any) => { 
        toast('error', `Error al iniciar sesión`);
      }
    );
  };
};

export function login(username: string, password: string): Function {
  return async (dispatch: Function) => {
    loginService.loginUser(username, password,
      (user: any) =>{
        if (user) {
          registUserData(user, dispatch);
        }
      },(error: any)=>{
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

function registUserData(user: any, dispatch: Function) {
  loginService.getUsersData((data: any) => {
    if (!data.hasOwnProperty(user.uid)) {    
      userData = new UserDataModel({
        id: user.uid,
        name: user.displayName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        photo: user.photoURL
      });

      loginService.registerUserData(userData.id,userData,() => {});
      dispatch(loginUser(userData));
      toast('success', `Bienvenid@ ${userData.name}`);
    } else {
      const { id, name, email, phoneNumber, photo } = data[user.uid];

      userData = new UserDataModel({
        id,
        name,
        email,
        phoneNumber,
        photo
      });
  
      dispatch(loginUser(userData));
      toast('success', `Bienvenid@ ${userData.name}`);
    }
  });
}