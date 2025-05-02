import { FC, useMemo } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { colors } from "@data/constants";
import { Gas } from "@data/models/gas";

import { useCatalogSystem } from "../../hooks";

export const CatalogItem: FC<Gas> = ({ ...props }) => {
  const { hasGasInCatalog, supplierCatalog, onHandleGas } = useCatalogSystem();

  const selected = useMemo(() => hasGasInCatalog(props.id), [supplierCatalog]);
  const image = useMemo(() => (props.icone ? { uri: props.icone } : require("@/assets/images/gas-icon.png")), []);

  const onClick = () => {
    onHandleGas(props);
  };

  return (
    <Pressable style={[styles["container"], selected && styles["container-selected"]]} onPress={onClick}>
      <View style={styles["icon-container"]}>
        <Image source={image} style={styles["icon"]} />
      </View>

      <Text style={[styles["text"]]}>
        {props.nome} {props.peso}kg
      </Text>
      <Text style={[styles["subtext"], selected && styles["subtext-selected"]]}>{selected ? "Excluir no catálogo" : "Incluir no catálogo"}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    backgroundColor: "white",
    borderColor: colors["gray-400"],
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    paddingBottom: 20,
    width: 120,
  },
  "container-selected": {
    borderColor: colors["primary-blue"],
    borderWidth: 2,
    alignItems: "center",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
    paddingBottom: 13,
    // transform: [{ scale: 1.05 }],
  },
  "icon-container": {
    width: "100%",
    height: 110,
    backgroundColor: colors["gray-500"],
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  icon: {
    width: "100%",
    height: "80%",
    objectFit: "contain",
  },
  text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
  },
  subtext: {
    fontFamily: "Montserrat-Medium",
    fontSize: 10,
    color: colors["gray-600"],
    marginTop: -5,
  },
  "subtext-selected": {
    color: colors["primary-blue"],
    fontFamily: "Montserrat-Bold",
    marginTop: 0,
  },
});
