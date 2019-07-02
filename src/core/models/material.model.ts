export class MaterialModel {

  name: string;
  description: string;
  img: string;
  uses: Array<string>;
  value: string;
  life: number;

  constructor(data: any | MaterialModel) {
    this.name = '';
    this.description = '';
    this.img = '';
    this.uses = [];
    this.value = '';
    this.life = 0;
    Object.assign(this, data);
  }
}