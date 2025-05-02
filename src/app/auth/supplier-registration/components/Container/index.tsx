import { FC, useCallback } from "react";
import { Image, Text, View } from "react-native";
import { RelativePathString, useRouter } from "expo-router";

import { AddressInput, Input, Registration } from "@components/template";

import styles from "./styles";

export const Container: FC = () => {
  const router = useRouter();

  const nextPage = useCallback(() => {
    router.push("../../../auth/product-linking");
  }, []);

  return (
    <Registration header={{ title: "Cadastro do fornecedor" }} button={{ title: "Continuar", onClick: nextPage }}>
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
