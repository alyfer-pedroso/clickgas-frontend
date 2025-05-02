import { FC } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { useSupplierRegistration } from "@data/hooks";

import { CurrentCatalogItem } from "../CurrentCatalogItem";

export const CurrentCatalog: FC = () => {
  const { supplierCatalog } = useSupplierRegistration();

  return (
    <View style={styles["container"]}>
      <Text style={styles["title"]}>Produtos inclusos no catálogo</Text>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles["items-container"]}>
        {supplierCatalog.map((gas) => (
          <CurrentCatalogItem key={gas.id} {...gas} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
    marginHorizontal: "auto",
    gap: 15,
    flex: 1,
    maxHeight: 330,
  },
  title: {
    fontFamily: "Montserrat-Medium",
    fontSize: 22,
    color: "#000000",
  },
  "items-container": {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 14.7,
  },
});
