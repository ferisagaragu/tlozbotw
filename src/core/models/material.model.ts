export class MaterialModel {

  name: string;
  description: string;
  img: string;
  uses: Array<string>;
  value: string;
  life: Array<number>;

  constructor(data: any | MaterialModel) {
    this.name = '';
    this.description = '';
    this.img = '';
    this.uses = [];
    this.value = '';
    this.life = [];
    Object.assign(this, data);
  }
}