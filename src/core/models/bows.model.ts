export class BowModel {

  id: string;
  name: string;
  damage: string; 
  description: string;
  img: string;

  constructor(data: any | BowModel) {
    this.id = '';
    this.name = '';
    this.damage = ''; 
    this.description = '';
    this.img = '';

    Object.assign(this, data);
  }
}