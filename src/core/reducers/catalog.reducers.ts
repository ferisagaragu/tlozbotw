import { Action } from "../interfaces/action.interface";
import { CatalogReducerEnum } from "../enums/catalog-reducer.enum";

export const regionsCatalog = (state = {}, action: Action) => {
  switch(action.type) {
    case CatalogReducerEnum.SET_CATALOG_REGIONS: return action.payload;
    default: return state;
  }
}