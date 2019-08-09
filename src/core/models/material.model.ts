export class MaterialModel {

  id: string;
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
  atackCooking: boolean;
  heartsCooking: boolean;
  ancestralWeapons: boolean;
  specificRecipes: boolean;
  heatResistanceCooking: boolean;
  resistanceCooking: boolean;
  championWeapons: boolean;
  resistanceHorse: boolean;
  resistanceCold: boolean;
  check: boolean;

  constructor(data: any | MaterialModel) {
    this.id = '';
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
    this.atackCooking = false;
    this.heartsCooking = false;
    this.ancestralWeapons = false;
    this.specificRecipes = false;
    this.heatResistanceCooking = false;
    this.resistanceCooking = false;
    this.championWeapons = false;
    this.resistanceHorse = false;
    this.resistanceCold = false;
    this.check = true;

    Object.assign(this, data);
  }
}