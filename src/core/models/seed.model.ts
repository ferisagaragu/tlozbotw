export class SeedModel {

  id: string;
  second: string;

  constructor(data: any | SeedModel) {
    this.id = '';
    this.second = '';

    Object.assign(this, data);
  }
}