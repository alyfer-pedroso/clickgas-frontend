import { FC } from "react";
import { Image, Text, View } from "react-native";

import styles from "./styles";

const Login: FC = () => {
  return (
    <View style={styles["container"]}>
      <Image source={require("@/assets/images/login-bg.png")} style={styles["image"]} />

      <View style={styles["form-container"]}>
        <View style={styles["form"]}>
          <Text style={styles["title"]}>Bem-vindo</Text>
        </View>
      </View>
    </View>
  );
};

export default Login;
