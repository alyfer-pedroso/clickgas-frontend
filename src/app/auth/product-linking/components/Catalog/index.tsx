import { FC, useEffect } from "react";
import { ScrollView } from "react-native";

import { useCatalogSystem } from "../../hooks";

import { CatalogItem } from "../CatalogItem";

export const Catalog: FC = () => {
  const { availableGas, getAvailableGas } = useCatalogSystem();

  useEffect(() => {
    getAvailableGas();
  }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        flexDirection: "row",
        gap: 16,
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      {availableGas.map((gas) => (
        <CatalogItem key={gas.id} {...gas} />
      ))}
    </ScrollView>
  );
};
