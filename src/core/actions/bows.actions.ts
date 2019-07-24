import { toast } from '../../shared/swal.shared';
import { Action } from '../interfaces/action.interface';
import { UserDataModel } from '../models/user-data.model';
import { BowModel } from '../models/bows.model';
import { BowsReducerEnum } from '../enums/bows-reducer.enum';
import BowService from '../http/bow.service';

const bowsService: BowService = new BowService();

export function setBows(payload: Array<BowModel>): Action {
  return {type: BowsReducerEnum.SET_BOWS, payload};
}

export function getBows(userData: UserDataModel): Function {
  return async (dispatch: Function) => {
    bowsService.getBows(userData, (bows: Array<BowModel>) => {
      dispatch(setBows(bows));
    });
  };
};