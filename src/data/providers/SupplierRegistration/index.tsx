import { FC, useState } from "react";

import { SupplierRegistration as RGContext } from "@data/contexts";
import { SUPPLIER_REG_INITIALSTATE } from "@data/constants";
import { Gas } from "../../models/gas";

export const SupplierRegistrationProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [supplierData] = useState(SUPPLIER_REG_INITIALSTATE.supplierData);
  const [supplierCatalog, setSupplierCatalog] = useState(SUPPLIER_REG_INITIALSTATE.supplierCatalog);

  const addSupplierCatalog = (gas: Gas) => setSupplierCatalog((state) => [...state, gas]);
  const removeSupplierCatalog = (id: number) => setSupplierCatalog((state) => state.filter((gas) => gas.id !== id));
  const hasGasInCatalog = (id: number) => supplierCatalog.findIndex((gas) => gas.id === id) !== -1;

  return (
    <RGContext.Provider
      value={{
        supplierData,
        supplierCatalog,
        addSupplierCatalog,
        removeSupplierCatalog,
        hasGasInCatalog,
      }}
    >
      {children}
    </RGContext.Provider>
  );
};
