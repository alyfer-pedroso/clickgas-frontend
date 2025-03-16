import { forwardRef, useImperativeHandle, useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";

import { Link } from "expo-router";

import { ModalModels } from "@data/models";
import { buttonStyles } from "@components/styles";

import styles from "./styles";

export const UserTypeModal = forwardRef<ModalModels.iData | null>((_, ref) => {
  const [visible, setVisible] = useState(false);

  const show = () => setVisible(true);
  const close = () => setVisible(false);

  useImperativeHandle(ref, () => ({ show, close, visible }), []);

  return (
    <Modal animationType="fade" transparent visible={visible}>
      <View style={styles["container"]}>
        <View style={styles["modal"]}>
          <Text style={styles["title"]}>Selecione o tipo de conta</Text>

          <View style={styles["buttons-container"]}>
            <Link style={buttonStyles["container-outline"]} href="/auth/client-registration">
              <Text style={buttonStyles["text-outline"]}>Cliente</Text>
            </Link>

            <Link style={buttonStyles["container-outline"]} href="/#">
              <Text style={buttonStyles["text-outline"]}>Fornecedor</Text>
            </Link>
          </View>

          <TouchableOpacity style={[buttonStyles["container"]]} onPress={close}>
            <Text style={buttonStyles["text"]}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
});
