import { Action } from '../interfaces/action.interface';
import { SeedModel } from '../models/seed.model';
import { SeedReducerEnum } from '../enums/seed-reducer.enum';
import SeedService from '../http/seed.service';

const seedService: SeedService = new SeedService();

export function setSeeds(payload: Array<SeedModel> | null): Action {
  return {type: SeedReducerEnum.SET_SEEDS, payload};
}

export function setVideoUrl(payload: string | null): Action {
  return {type: SeedReducerEnum.SET_VIDEOURL, payload};
}

export function clearSeeds() {
  return async (dispatch: Function) => {
    dispatch(setSeeds(null));
    dispatch(setVideoUrl(null));
  }
}

export function getSeeds(regionId: string): Function {
  return async (dispatch: Function) => {
    seedService.getSeeds(regionId ,(seeds: Array<SeedModel>, videoUrl: string) => {
      dispatch(setSeeds(seeds));
      dispatch(setVideoUrl(videoUrl));
    });
  };
};