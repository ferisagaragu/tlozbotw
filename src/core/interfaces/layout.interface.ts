import { UserDataModel } from "../models/user-data.model";

export interface NavBarInterface {
  userData: UserDataModel,
  logout: Function
}