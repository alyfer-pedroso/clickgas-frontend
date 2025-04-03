import { FC } from "react";
import { Image, Text, View } from "react-native";

import { Input, Registration } from "@components/template";

import styles from "./styles";
import * as utils from "./utils";

const ClientRegistration: FC = () => {
  return (
    <Registration header={utils.REGISTRATION_HEADER} button={utils.REGISTRATION_BUTTON}>
      <Input label="Nome Completo" />
      <Input label="Email" />

      <View style={styles["phone-container"]}>
        <View style={styles["phone-ddd"]}>
          <Image source={require("@/assets/images/brazil-icon.png")} style={{ width: 25 }} />
          <Text style={styles["phone-text"]}>+55</Text>
        </View>

        <Input label="Telefone" containerStyle={{ width: "auto", flex: 1 }} />
      </View>

      <Text style={styles["title"]}>Onde você quer receber seu pedido?</Text>
    </Registration>
  );
};

export default ClientRegistration;
