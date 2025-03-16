import { FC } from "react";
import { Image, View } from "react-native";

import { usePrivacyTerms } from "@data/hooks";
import { PrivacyTerms } from "@components/template";

import { useUserTypeModal } from "./hooks";
import { Bottom, Middle, Top, UserTypeModal } from "./components";
import styles from "./styles";

const Login: FC = () => {
  const { privacyTermsRef, show } = usePrivacyTerms();
  const { userTypeRef, ...userTypeModal } = useUserTypeModal();

  return (
    <View style={styles["container"]}>
      <PrivacyTerms ref={privacyTermsRef} />
      <UserTypeModal ref={userTypeRef} />

      <Image source={require("@/assets/images/login-bg.png")} style={styles["image"]} />

      <View style={styles["form-container"]}>
        <View style={styles["form"]}>
          <Top />
          <Middle userTypeModal={userTypeModal} />
          <Bottom showTerms={show} />
        </View>
      </View>
    </View>
  );
};

export default Login;
