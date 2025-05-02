import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  "phone-container": {
    flexDirection: "row",
    width: "100%",
    gap: 10,
  },
  "phone-ddd": {
    width: 70,
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "#EEEEEE",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  "phone-text": {
    fontFamily: "Montserrat-SemiBold",
  },
  subtitle: {
    marginHorizontal: "auto",
    width: "60%",
    marginTop: "2%",
    alignContent: "center",
    textAlign: "center",
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
  },
});

export default styles;
