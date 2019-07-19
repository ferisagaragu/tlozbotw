export class MaterialModel {

  id: number;
  name: string;
  description: string;
  img: string;
  value: string;
  life: number;
  addLife: boolean;
  sell: boolean;
  improveArmor: boolean;
  elixir: boolean;
  defenseCooking: boolean;
  heartsCooking: boolean;
  ancestralWeapons: boolean;
  specificRecipes: boolean;

  constructor(data: any | MaterialModel) {
    this.id = -1;
    this.name = '';
    this.description = '';
    this.img = '';
    this.value = '';
    this.life = 0;

    this.addLife = false;
    this.sell = false;
    this.improveArmor = false;
    this.elixir = false;
    this.defenseCooking = false;
    this.heartsCooking = false;
    this.ancestralWeapons = false;
    this.specificRecipes = false;

    Object.assign(this, data);
  }
}