import { StyleSheet } from "react-native";
import { colors } from "@data/constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 28,
    paddingBottom: 18,
    borderBottomWidth: 1,
    borderBottomColor: colors["third-gray"],
  },
  card: {
    width: "100%",
    flexDirection: "row",
    gap: 20,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  textContainer: {
    maxWidth: "80%",
  },
  titleText: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 15,
    color: "black",
  },
  addressText: {
    fontFamily: "Montserrat-Medium",
    color: colors["secondary-gray"],
  },
});

export default styles;
