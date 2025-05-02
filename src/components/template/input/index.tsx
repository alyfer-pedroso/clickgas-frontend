import { FC } from "react";
import { StyleProp, Text, TextInput, TextInputProps, View, ViewStyle } from "react-native";

interface props extends TextInputProps {
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

import styles from "./styles";

export const Input: FC<props> = ({ label, containerStyle, ...input_attributes }) => {
  return (
    <View style={[styles["container"], ...[containerStyle]]}>
      <Text style={styles["label"]}>{label}</Text>
      <TextInput style={[styles["input"], ...[input_attributes.style]]} {...input_attributes} />
    </View>
  );
};
