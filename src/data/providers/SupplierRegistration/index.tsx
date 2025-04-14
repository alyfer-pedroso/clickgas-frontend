import { FC, useState } from "react";

import { SupplierRegistration as RGContext } from "@data/contexts";
import { SUPPLIER_REGISTRATION_INITIALSTATE } from "@data/constants";

export const SupplierRegistrationProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [supplierData] = useState(SUPPLIER_REGISTRATION_INITIALSTATE.supplierData);

  return <RGContext.Provider value={{ supplierData }}>{children}</RGContext.Provider>;
};
