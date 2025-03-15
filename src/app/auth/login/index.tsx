import { FC } from "react";
import { Image, View } from "react-native";

import { usePrivacyTerms } from "@data/hooks";
import { PrivacyTerms } from "@components/template";

import { Bottom, Middle, Top } from "./components";
import styles from "./styles";

const Login: FC = () => {
  const { privacyTermsRef, show } = usePrivacyTerms();

  return (
    <View style={styles["container"]}>
      <PrivacyTerms ref={privacyTermsRef} />

      <Image source={require("@/assets/images/login-bg.png")} style={styles["image"]} />

      <View style={styles["form-container"]}>
        <View style={styles["form"]}>
          <Top />
          <Middle />
          <Bottom showTerms={show} />
        </View>
      </View>
    </View>
  );
};

export default Login;
