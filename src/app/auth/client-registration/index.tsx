import { FC } from "react";
import { Image, Text, View } from "react-native";

import { colors } from "@data/constants";
import { AddressInput, Input, Registration } from "@components/template";

import styles from "./styles";

const ClientRegistration: FC = () => {
  return (
    <Registration header={{ title: "Cadastro do cliente", goBack: "../../../auth/login" }} button={{ title: "Finalizar", onClick: () => {} }}>
      <Input label="Nome Completo *" />
      <Input label="Email *" />

      <View style={styles["phone-container"]}>
        <View style={styles["phone-ddd"]}>
          <Image source={require("@/assets/images/brazil-icon.png")} style={{ width: 25 }} />
          <Text style={styles["phone-text"]}>+55</Text>
        </View>

        <Input label="Telefone *" containerStyle={{ width: "auto", flex: 1 }} />
      </View>

      <Input label="Senha *" secureTextEntry />

      <Text style={styles["subtitle"]}>Onde você quer receber seu pedido?</Text>

      <AddressInput />

      <Text style={[styles["subtitle"], { color: colors["primary-blue"], width: "100%", marginTop: "auto", opacity: 0.7 }]}>
        O gás poderá enviar comunicações através do seu contato
      </Text>
    </Registration>
  );
};

export default ClientRegistration;
