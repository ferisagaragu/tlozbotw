export class UserDataModel {

  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  photo: string;

  constructor(data: any | UserDataModel) {
    this.id = '';
    this.name = '';
    this.email = '';
    this.phoneNumber = '';
    this.photo = '';

    Object.assign(this, data);
  }
}