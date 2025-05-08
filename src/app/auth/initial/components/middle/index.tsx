import { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { Link } from "expo-router";
import { Feather } from "@expo/vector-icons";

import { colors } from "@data/constants";
import { ModalModels } from "@data/models";
import { buttonStyles } from "@components/styles";

import styles from "../../styles";

interface props {
  userTypeModal: ModalModels.iData;
}

export const Middle: FC<props> = ({ userTypeModal }) => {
  return (
    <View style={styles["buttons-container"]}>
      <Link href="/auth/login" style={buttonStyles["container"]}>
        <Text style={buttonStyles["text"]}>Entrar na minha conta</Text>
      </Link>

      <TouchableOpacity style={[buttonStyles["container-outline"], { paddingVertical: 10 }]} onPress={userTypeModal.show}>
        <Text style={buttonStyles["text-outline"]}>
          <Feather name="user" size={24} color={colors["primary-blue"]} /> Criar uma nova conta
        </Text>
      </TouchableOpacity>
    </View>
  );
};
