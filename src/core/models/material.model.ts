export class MaterialModel {

  name: string;
  description: string;
  img: string;
  uses: string;
  value: string;

  constructor(data: any | MaterialModel) {
    this.name = '';
    this.description = '';
    this.img = '';
    this.uses = '';
    this.value = '';
    Object.assign(this, data);
  }
}