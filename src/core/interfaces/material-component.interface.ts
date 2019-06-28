import { MaterialModel } from "../models/material.model";

export interface ItemMaterialInterface {
  material: MaterialModel
}

export interface TableEditMaterialInterface {
  materials: Array<MaterialModel>
}