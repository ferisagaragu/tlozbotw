import { Action } from '../interfaces/action.interface';
import LoginService from '../http/login.service';
import { LoginReducerEnum } from '../enums/login-reducer.enum';
import { toast } from '../../shared/swal.shared';
import { UserDataModel } from '../models/user-data.model';

const loginService: LoginService = new LoginService();

export function loginUser(payload: any): Action {
  return {type: LoginReducerEnum.LOGIN, payload};
}

export function logoutUser(): Action {
  return {type: LoginReducerEnum.LOGOUT, payload: null};
}

export function createUser(data: any): Function {
  return async () => {
    loginService.createUser(data.email, data.password,
      (user: any) => {
        if (user) {
          const userData = {
            uid: user.uid,
            displayName: data.name,
            email: user.email,
            phoneNumber: data.phoneNumber === undefined ? '' : data.phoneNumber,
            photoURL: data.photo === undefined ? '' : data.photo,
            role: 0
          };
  
          registUserInformation(userData);
        }
      },(error: any)=>{
        toast('error', `El usuario que has ingresado ya existe`);
      }
    );
  };
};

export function loginWhitGoogle(): Function {
  return async (dispatch: Function) => {
    loginService.loginUserWhitGoogle(
      (token: any, user: any)=> {
        if (user) {
          registUserInformation(user, dispatch);
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
          registUserInformation(user, dispatch);
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
        toast('error', 'Error al cerrar sesión');
      }
    );
  };
};

//INTERNAL FUNCTIONS
function registUserInformation(user: any, dispatch?: Function) {
  loginService.getUsersData((data: any) => {
    if (!data.hasOwnProperty(user.uid)) {    
      registNewUserInformation(user, dispatch);
    } else {
      getUserInformation(data, user, dispatch);
    }
  });
}

function registNewUserInformation(user: any, dispatch?: Function): void {
  const { uid, displayName, email, phoneNumber, photoURL } = user;

  const userData: UserDataModel = new UserDataModel({
    id: uid,
    name: displayName,
    email,
    phoneNumber,
    photo: photoURL,
    role: 0
  });

  loginService.registerUserData(userData.id,userData,() => {});
  if (dispatch) {
    dispatch(loginUser(userData));
    toast('success', `Bienvenid@ ${userData.name}`);
  } else {
    toast('success', `Usuario registrado con el correo ${user.email}`);
  }
}

function getUserInformation(data:any, user: any, dispatch?: Function) {
  const { id, name, email, phoneNumber, photo, role } = data[user.uid];

  const userData: UserDataModel = new UserDataModel({
    id,
    name,
    email,
    phoneNumber,
    photo,
    role
  });

  if (dispatch) {
    dispatch(loginUser(userData));
  }
  toast('success', `Bienvenid@ ${userData.name}`);
}