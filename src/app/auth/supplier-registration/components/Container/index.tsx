import { FC } from "react";
import { Image, Text, View } from "react-native";

import { AddressInput, Input, Registration } from "@components/template";

import * as utils from "../../utils";
import styles from "./styles";

export const Container: FC = () => {
  return (
    <Registration header={utils.REGISTRATION_HEADER} button={utils.REGISTRATION_BUTTON}>
      <Input label="Nome Completo *" />
      <Input label="Email *" />

      <View style={styles["phone-container"]}>
        <View style={styles["phone-ddd"]}>
          <Image source={require("@/assets/images/brazil-icon.png")} style={{ width: 25 }} />
          <Text style={styles["phone-text"]}>+55</Text>
        </View>

        <Input label="Telefone *" containerStyle={{ width: "auto", flex: 1 }} />
      </View>

      <Input label="CNPJ" />
      <Input label="Senha *" secureTextEntry />

      <Text style={styles["subtitle"]}>Inclua o endereço do seu estabelecimento</Text>

      <AddressInput />
    </Registration>
  );
};
