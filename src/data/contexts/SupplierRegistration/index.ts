import { createContext } from "react";
import { SUPPLIER_REGISTRATION_INITIALSTATE } from "@data/constants";

export const SupplierRegistration = createContext({ ...SUPPLIER_REGISTRATION_INITIALSTATE });
