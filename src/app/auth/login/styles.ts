import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column-reverse",
    position: "relative",
  },
  image: {
    position: "absolute",
    top: 0,
  },
  "form-container": {
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    height: "45%",
    paddingTop: 30,
    paddingHorizontal: 25,
  },
  form: {
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 28,
    fontFamily: "Montserrat-Bold",
  },
  text: {
    fontFamily: "Montserrat-Regular",
    fontSize: 17,
  },
  terms: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    paddingBottom: 20,
  },
  "buttons-container": {
    width: "100%",
    gap: 12,
  },
});

export default styles;
