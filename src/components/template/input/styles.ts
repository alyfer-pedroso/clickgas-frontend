import { StyleSheet } from "react-native";
import { colors } from "@data/constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 1,
    borderColor: colors["primary-blue"],
    borderRadius: 10,
    position: "relative",
    paddingVertical: 3,
  },
  label: {
    fontFamily: "Montserrat-SemiBold",
    color: colors["primary-blue"],
    backgroundColor: "white",
    position: "absolute",
    top: -10,
    left: 15,
    paddingHorizontal: 5,
  },
  input: {
    width: "100%",
    paddingHorizontal: 15,
    borderRadius: 10,
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    color: "black",
  },
});

export default styles;
