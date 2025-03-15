import { FC } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";

import { colors } from "@data/constants";

import styles from "../../styles";

interface props {
  showTerms: VoidFunction;
}

export const Bottom: FC<props> = ({ showTerms }) => {
  return (
    <View style={styles["terms"]}>
      <Text style={styles["text"]}>Leia os</Text>

      <TouchableWithoutFeedback onPress={showTerms}>
        <Text style={[styles["text"], { color: colors["primary-blue"], fontFamily: "Montserrat-Medium" }]}>Termos de Privacidade</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};
