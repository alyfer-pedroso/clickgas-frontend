import { FC, useImperativeHandle, useState } from "react";
import { Modal, Text, TouchableHighlight, View } from "react-native";

import { ModalModels } from "@data/models";

import { buttonStyles } from "../../styles";

interface props {
  ref: React.RefObject<ModalModels.iData | null>;
}

export const PrivacyTerms: FC<props> = ({ ref }) => {
  const [visible, setVisible] = useState(false);

  const show = () => setVisible(true);
  const close = () => setVisible(false);

  useImperativeHandle(ref, () => ({ show, close, visible }), []);

  return (
    <Modal animationType="slide" visible={visible}>
      <View style={{ flex: 1, alignItems: "center", paddingVertical: 20, justifyContent: "space-between" }}>
        <Text style={{ fontFamily: "Montserrat-Bold", fontSize: 28 }}>Termos de Privacidade</Text>

        <TouchableHighlight onPress={close} style={buttonStyles["container"]}>
          <Text style={buttonStyles["text"]}>Fechar</Text>
        </TouchableHighlight>
      </View>
    </Modal>
  );
};
