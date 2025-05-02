import { FC } from "react";
import { ScrollView } from "react-native";
import { CatalogItem } from "../CatalogItem";

export const Catalog: FC = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        flexDirection: "row",
        gap: 16,
        alignItems: "flex-start",
        justifyContent: "center",
        // paddingTop: 20,
        // paddingHorizontal: 5,
      }}
    >
      <CatalogItem />
      <CatalogItem selected />
      <CatalogItem />
    </ScrollView>
  );
};
