import { MaterialReducerEnum } from '../enums/material-reducer.enum';
import { toast } from '../../shared/swal.shared';
import { Action } from '../interfaces/action.interface';
import MaterialService from '../http/material.service';
import { MaterialModel } from '../models/material.model';
import { UserDataModel } from '../models/user-data.model';

const materialService: MaterialService = new MaterialService();

export function setMaterials(payload: Array<MaterialModel>): Action {
  return {type: MaterialReducerEnum.SET_MATERIALS, payload};
}

export function getMaterials(userData: UserDataModel): Function {
  return async (dispatch: Function) => {
    materialService.getMaterials(userData, (materials: Array<MaterialModel>) => {
      dispatch(setMaterials(materials));
    });
  };
};

export function updateMaterials(data: MaterialModel): Function {
  return async (dispatch: Function) => {
    materialService.updateMaterial(data.id, data, (error: any) => {});
    toast('info', `${data.name} actualizado.`);
  };
}

export function selectMaterial(userData: UserDataModel, data: MaterialModel): Function {
  return async (dispatch: Function) => {
    materialService.selectMaterial(userData, data, (error: any) => {});
  };
}