import { FC } from "react";

import { Input, Registration } from "@components/template";

import { Text, View } from "react-native"

import styles from "./styles"


import * as utils from "./utils";

const ClientRegistration: FC = () => {
  return (
    <Registration header={utils.REGISTRATION_HEADER} button={utils.REGISTRATION_BUTTON}>
      <Input label="Nome Completo" />

      <Input label="Email" />

      <View style={styles["phone"]}><Text style={styles["text"]}>+55</Text><Input label="Telefone" /></View>

      <View><Text style={styles["title"]}>Onde você quer receber seu pedido?</Text></View>

    </Registration>
    
    
  );
};

export default ClientRegistration;
