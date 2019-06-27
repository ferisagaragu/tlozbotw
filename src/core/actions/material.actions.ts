import { ExampleEnum } from '../enums/material-reducer.enum';
import { toast } from '../../shared/swal.shared';
import { Action } from '../interfaces/action.interface';
import MaterialService from '../http/material.service';
import { MaterialModel } from '../models/material.model';

const materialService: MaterialService = new MaterialService();

export function setMaterials(payload: Array<MaterialModel>): Action {
  return {type: ExampleEnum.SET_MATERIALS, payload};
}

export function getMaterials(): Function {
  return async (dispatch: Function) => {
    materialService.getMaterials((materials: Array<MaterialModel>) => {
      dispatch(setMaterials(materials));
      toast('warning', 'Datos actualizados desde Firebase');
    });
  };
};

