import { UserDataModel } from "../models/user-data.model";

export interface LayoutPropsInterface {
  userData: UserDataModel,
  logout: Function
}

export interface NavbarHeaderPropsInterface {
  userData: UserDataModel,
  onLogOut: Function
}