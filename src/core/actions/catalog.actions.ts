import { Action } from '../interfaces/action.interface';
import CatalogService from '../http/catalog.service';
import { CatalogReducerEnum } from '../enums/catalog-reducer.enum';
import { RegionModel } from '../models/region.model';

const catalogService: CatalogService = new CatalogService();

export function setCatalogRegions(payload: Array<RegionModel>): Action {
  return {type: CatalogReducerEnum.SET_CATALOG_REGIONS, payload};
}

export function getCatalogRegions(): Function {
  return async (dispatch: Function) => {
    catalogService.getCatalogRegions((regions: Array<RegionModel>) => {
      dispatch(setCatalogRegions(regions));
    });
  };
};