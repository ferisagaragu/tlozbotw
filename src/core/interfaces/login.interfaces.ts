export interface LoginPropsInterface {
  createUser: Function,
  login: Function,
  loginWhitGoogle: Function
}

export interface LoginStateInterface {
  edit: boolean
}

export interface DashboardExternalLoginPropsInterface {
  onLoginWhitGoogle: Function
}