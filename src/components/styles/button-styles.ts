import { StyleSheet } from "react-native";
import { colors } from "@data/constants/colors";

export const buttonStyles = StyleSheet.create({
  container: {
    backgroundColor: colors["primary-blue"],
    width: "100%",
    paddingVertical: 14,
    borderRadius: 12,
  },
  "container-outline": {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: colors["primary-blue"],
    width: "100%",
    paddingVertical: 14,
    borderRadius: 12,
  },
  text: {
    fontFamily: "Montserrat-Bold",
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
  "text-outline": {
    fontFamily: "Montserrat-Bold",
    color: colors["primary-blue"],
    textAlign: "center",
    fontSize: 16,
  },
});
