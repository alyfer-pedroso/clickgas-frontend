import { FC } from "react";
import { Text, View } from "react-native";

import styles from "./styles";

const Login: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Test Login</Text>
    </View>
  );
};

export default Login;
