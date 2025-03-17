import { FC } from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";

interface props extends TextInputProps {
  label?: string;
}

import styles from "./styles";

export const Input: FC<props> = ({ label, ...input_attributes }) => {
  return (
    <View style={styles["container"]}>
      <Text style={styles["label"]}>{label}</Text>
      <TextInput style={[styles["input"], ...[input_attributes.style]]} {...input_attributes} />
    </View>
  );
};
