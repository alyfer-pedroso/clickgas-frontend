import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modal: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    width: "90%",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 35,
  },
  title: {
    fontSize: 24,
    fontFamily: "Montserrat-Bold",
  },
  "buttons-container": {
    width: "100%",
    gap: 8,
  },
});

export default styles;
