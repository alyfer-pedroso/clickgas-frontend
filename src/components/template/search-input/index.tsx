import { FC } from "react";
import { StyleProp, TextInput, TextInputProps, View, ViewStyle } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { colors } from "@data/constants";

interface props extends TextInputProps {
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

import styles from "./styles";

export const SearchInput: FC<props> = ({ label, containerStyle, ...input_attributes }) => {
  return (
    <View style={[styles["container"], ...[containerStyle]]}>
      <Octicons name="search" size={24} color={colors["primary-blue"]} />
      <TextInput style={[styles["input"], ...[input_attributes.style]]} {...input_attributes} placeholderTextColor={colors["secondary-gray"]} />
    </View>
  );
};
