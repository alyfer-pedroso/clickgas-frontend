import { FC } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { Link } from "expo-router";

import { colors } from "@data/constants";
import { Input } from "@components/template";
import { buttonStyles } from "@components/styles";

import styles from "./styles";

const Login: FC = () => {
  return (
    <View style={styles["container"]}>
      <Image source={require("@/assets/images/login-bg.png")} style={styles["image"]} />

      <View style={styles["form-container"]}>
        <View style={styles["form"]}>
          <View>
            <Text style={styles["title"]}>Acesse sua conta</Text>
            <Text style={[styles["text"], { marginTop: -2 }]}>Seu gás rápido e fácil, com apenas alguns cliques!</Text>
          </View>

          <View style={styles["buttons-container"]}>
            <Input label="Digite seu email *" />
            <Input label="Digite sua senha *" />

            <TouchableOpacity style={buttonStyles["container"]}>
              <Text style={buttonStyles["text"]}>Entrar na minha conta</Text>
            </TouchableOpacity>
          </View>

          <View style={styles["bottom"]}>
            <Text style={styles["text"]}>Voltar para o</Text>

            <Link href="/auth/initial">
              <Text style={[styles["text"], { color: colors["primary-blue"], fontFamily: "Montserrat-Medium" }]}>Início</Text>
            </Link>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
