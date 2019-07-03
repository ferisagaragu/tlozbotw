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
  updateMaterials: Function;
}

export interface FormEditMaterialInterface {
  handleSubmit: Function;
  reset: Function;
  submitting: boolean;
  valid: boolean;
  initialize: Function;
  initialValues: MaterialModel;
  updateMaterials: Function;
}