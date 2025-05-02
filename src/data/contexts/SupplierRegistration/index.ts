import { createContext } from "react";
import { SUPPLIER_REG_INITIALSTATE } from "@data/constants";

export const SupplierRegistration = createContext({ ...SUPPLIER_REG_INITIALSTATE });
