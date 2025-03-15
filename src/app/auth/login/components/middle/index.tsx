import { FC } from "react";
import { Text, TouchableHighlight, View } from "react-native";

import { Feather } from "@expo/vector-icons";

import { colors } from "@data/constants/colors";
import { buttonStyles } from "@components/styles";

import styles from "../../styles";

export const Middle: FC = () => {
  return (
    <View style={styles["buttons-container"]}>
      <TouchableHighlight style={buttonStyles["container"]}>
        <Text style={buttonStyles["text"]}>Entrar na minha conta</Text>
      </TouchableHighlight>

      <TouchableHighlight style={[buttonStyles["container-outline"], { paddingVertical: 10 }]}>
        <Text style={buttonStyles["text-outline"]}>
          <Feather name="user" size={24} color={colors["primary-blue"]} /> Criar uma nova conta
        </Text>
      </TouchableHighlight>
    </View>
  );
};
