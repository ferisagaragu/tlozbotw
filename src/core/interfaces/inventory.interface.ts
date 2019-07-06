import { MaterialModel } from "../models/material.model";

export interface ItemMaterialInterface {
  material: MaterialModel
}

export interface MaterialInterface {
  getMaterials: Function;
  materials: Array<MaterialModel>;
}

export interface TableMaterialInterface {
  materials: Array<MaterialModel>;
  updateMaterials: Function;
}

export interface FormMaterialInterface {
  initialValues: any,
  handleSubmit: any,
  cancel: any,
  submitting: any,
  submitActions: Function
}