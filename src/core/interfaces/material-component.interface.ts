import { MaterialModel } from "../models/material.model";
import { FormEventHandler } from "react";

export interface ItemMaterialInterface {
  material: MaterialModel
}

export interface MaterialInterface {
  getMaterials(): Function;
  materials: Array<MaterialModel>;
}

export interface TableEditMaterialInterface {
  materials: Array<MaterialModel>;
}

export interface FormEditMaterialInterface {
  initialize(values: any): Function;
  initialValues: MaterialModel;
  handleSubmit: FormEventHandler;
  pristine: any; 
  reset: any;
  submitting: any;
}