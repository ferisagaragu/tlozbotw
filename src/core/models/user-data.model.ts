export class UserDataModel {

  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  photo: string;
  role: number;

  constructor(data: any | UserDataModel) {
    this.id = '';
    this.name = '';
    this.email = '';
    this.phoneNumber = '';
    this.photo = '';
    this.role = 0;

    Object.assign(this, data);
  }
}