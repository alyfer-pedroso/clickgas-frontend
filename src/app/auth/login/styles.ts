import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column-reverse",
    position: "relative",
  },
  image: {
    position: "absolute",
    top: "-8%",
  },
  "form-container": {
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    height: "55%",
    paddingTop: 30,
    paddingHorizontal: 25,
  },
  form: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontFamily: "Montserrat-Bold",
    color: "#000000",
  },
});

export default styles;
