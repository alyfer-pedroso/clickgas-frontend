import { FC } from "react";
import { Text, View } from "react-native";
import styles from "../../styles";

export const Top: FC = () => {
  return (
    <View>
      <Text style={styles["title"]}>Bem-vindo</Text>
      <Text style={[styles["text"], { marginTop: -2 }]}>Seu gás rápido e fácil, com apenas alguns cliques!</Text>
    </View>
  );
};
