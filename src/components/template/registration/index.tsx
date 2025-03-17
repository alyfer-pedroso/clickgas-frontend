import { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { useRouter } from "expo-router";
import { Entypo } from "@expo/vector-icons";

import { colors } from "@data/constants";
import { buttonStyles } from "@components/styles";

import styles from "./styles";

interface props {
  header: { title: string; back?: boolean };
  button: { title: string; onClick: VoidFunction | (() => Promise<void>) };
  children?: React.ReactNode;
}

export const Registration: FC<props> = ({ ...props }) => {
  const router = useRouter();
  const goBack = () => router.back();

  return (
    <View style={styles["container"]}>
      <View style={styles["header"]}>
        {props.header.back && (
          <TouchableOpacity onPress={goBack}>
            <Entypo name="chevron-left" size={40} color={colors["primary-blue"]} />
          </TouchableOpacity>
        )}
        <Text style={styles["header-text"]}>{props.header.title}</Text>
      </View>

      <View style={styles["main"]}>{props.children}</View>

      <View style={styles["footer"]}>
        <TouchableOpacity style={buttonStyles["container"]} onPress={props.button.onClick}>
          <Text style={buttonStyles["text"]}>{props.button.title}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
