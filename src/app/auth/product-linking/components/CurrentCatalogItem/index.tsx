import { FC, useMemo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { colors } from "@data/constants";
import { Gas } from "@data/models/gas";

export const CurrentCatalogItem: FC<Gas> = ({ ...props }) => {
  const image = useMemo(() => (props.icone ? { uri: props.icone } : require("@/assets/images/gas-icon.png")), []);

  return (
    <View style={[styles["container"]]}>
      <View style={styles["icon-container"]}>
        <Image source={image} style={styles["icon"]} />

        <View style={styles["check"]}>
          <Entypo name="check" size={18} color="lightgreen" />
        </View>
      </View>

      <Text style={[styles["text"]]}>{props.descricao || props.nome}</Text>
      <Text style={[styles["subtext"]]}>Peso {props.peso}kg</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    backgroundColor: "white",
    flexBasis: "30%",
    maxWidth: 100,
  },
  "icon-container": {
    width: "100%",
    height: 90,
    backgroundColor: colors["third-blue"],
    borderColor: colors["blue-400"],
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 5,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  icon: {
    width: "100%",
    height: "80%",
    objectFit: "contain",
  },
  text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
  },
  subtext: {
    fontFamily: "Montserrat-Medium",
    fontSize: 10,
    color: colors["secondary-gray"],
    marginTop: -5,
  },
  check: {
    position: "absolute",
    bottom: -5,
    right: -5,
    backgroundColor: "white",
    borderWidth: 0.5,
    borderColor: colors["primary-blue"],
    borderRadius: "100%",
    padding: 2,
  },
});
