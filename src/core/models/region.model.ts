export class RegionModel {

  code: string;
  name: string;

  constructor(data: any | RegionModel) {
    this.code = '';
    this.name = '';

    Object.assign(this, data);
  }
}