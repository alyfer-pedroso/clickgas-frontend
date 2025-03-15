import { forwardRef, useImperativeHandle, useState } from "react";
import { Modal, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";

import { ModalModels } from "@data/models";

import { buttonStyles } from "../../styles";

export const PrivacyTerms = forwardRef<ModalModels.iData | null>((_, ref) => {
  const [visible, setVisible] = useState(false);

  const show = () => setVisible(true);
  const close = () => setVisible(false);

  useImperativeHandle(ref, () => ({ show, close, visible }), []);

  return (
    <Modal animationType="slide" visible={visible}>
      <View style={{ width: "95%", flex: 1, alignItems: "center", paddingVertical: 20, justifyContent: "space-between", marginHorizontal: "auto" }}>
        <Text style={{ fontFamily: "Montserrat-Bold", fontSize: 28 }}>Termos de Privacidade</Text>

        <TouchableOpacity onPress={close} style={buttonStyles["container"]}>
          <Text style={buttonStyles["text"]}>Fechar</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
});
