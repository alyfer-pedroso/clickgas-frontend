import { StyleSheet } from "react-native";
import { colors } from "@data/constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "relative",
    paddingLeft: 20,
    paddingVertical: 3,
    borderRadius: 10,
    backgroundColor: colors["primary-gray"],
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 5,
  },
  input: {
    fontFamily: "Montserrat-Medium",
    width: "100%",
    paddingHorizontal: 15,
    backgroundColor: "transparent",
    fontSize: 16,
    color: "black",
    zIndex: 10,
  },
});

export default styles;
