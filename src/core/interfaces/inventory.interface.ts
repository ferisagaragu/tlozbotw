import { MaterialModel } from "../models/material.model";

export interface ItemMaterialPropsInterface {
  material: MaterialModel
}

export interface MaterialPropsInterface {
  getMaterials: Function;
  materials: Array<MaterialModel>;
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