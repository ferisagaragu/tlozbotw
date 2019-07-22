import { BowModel } from "../models/bows.model";

export interface ItemBowsPropsInterface {
  bow: BowModel;
  onCheck: Function;
}

export interface ListBowsPropsInterface {
  bows: Array<BowModel>;
}

export interface ListBowsStateInterface {
  selectedBows: Array<BowModel>;
}
