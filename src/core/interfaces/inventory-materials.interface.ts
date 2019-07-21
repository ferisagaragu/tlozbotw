import { MaterialModel } from "../models/material.model";
import { UserDataModel } from "../models/user-data.model";

export interface ItemMaterialPropsInterface {
  material: MaterialModel,
  selectMaterial: Function
}

export interface MaterialPropsInterface {
  getMaterials: Function;
  updateMaterials: Function;
  materials: Array<MaterialModel>;
  userData: UserDataModel;
  selectMaterial: Function;
}

export interface MaterialStateInterface {
  selectedMaterials: Array<MaterialModel>;
}

export interface TableMaterialPropsInterface {
  materials: Array<MaterialModel>;
  updateMaterials: Function;
}

export interface TableMaterialStateInterface {
  material: MaterialModel;
  show: boolean;
}

export interface FormMaterialPropsInterface {
  initialValues: any,
  handleSubmit: any,
  cancel: any,
  submitting: any,
  submitActions: Function
}

export interface FormMaterialStateInterface {
  urlIcon: string;
  lifeIndicator: number;
}

export interface IndicatorPhotoMaterialPropsInterface {
  onCheck: Function;
  check: boolean;
}

export interface IndicatorPhotoMaterialStateInterface {
  selected: boolean;
}