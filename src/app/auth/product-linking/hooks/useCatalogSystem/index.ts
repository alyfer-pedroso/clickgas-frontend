import { useState } from "react";

import { useSupplierRegistration } from "@data/hooks";
import { Gas } from "@data/models/gas";

import placeholder from "./placeholder.json";

export function useCatalogSystem() {
  const { supplierCatalog, addSupplierCatalog, removeSupplierCatalog, hasGasInCatalog } = useSupplierRegistration();

  const [availableGas, setAvailableGas] = useState<Gas[]>([]);
  const [loading, setLoading] = useState(true);

  const onHandleGas = (gas: Gas) => {
    if (hasGasInCatalog(gas.id)) {
      removeSupplierCatalog(gas.id);
      return;
    }

    addSupplierCatalog(gas);
  };

  const getAvailableGas = async () => {
    try {
      if (availableGas.length) return;

      const response: Gas[] = placeholder;
      setAvailableGas(response ?? []);
    } finally {
      setLoading(false);
    }
  };

  return {
    supplierCatalog,
    onHandleGas,
    hasGasInCatalog,
    availableGas,
    getAvailableGas,
    loading,
  };
}
