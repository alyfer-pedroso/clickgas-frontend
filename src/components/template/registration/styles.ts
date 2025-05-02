import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "white",
    gap: 15,
    minHeight: "100%",
  },
  header: {
    gap: 15,
    paddingTop: 25,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  "header-text": {
    fontFamily: "Montserrat-Medium",
    fontSize: 22,
    color: "#000000",
    marginLeft: 15,
  },
  main: {
    flex: 1,
    marginHorizontal: 22,
    gap: 20,
  },
  footer: {
    alignSelf: "flex-end",
    width: "80%",
    marginHorizontal: "auto",
    paddingBottom: 25,
  },
});

export default styles;
