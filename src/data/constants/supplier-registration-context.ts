import { Gas } from "../models/gas";
import { Supplier } from "../models/supplier";

const supplierData = new Supplier();
const supplierCatalog: Gas[] = [];

const addSupplierCatalog: (gas: Gas) => void = () => {};
const removeSupplierCatalog: (id: number) => void = () => {};
const hasGasInCatalog: (id: number) => boolean = () => false;

export const SUPPLIER_REG_INITIALSTATE = {
  supplierData,
  supplierCatalog,
  addSupplierCatalog,
  removeSupplierCatalog,
  hasGasInCatalog,
};
