import { FC } from "react";
import { Image, View } from "react-native";

import { PrivacyTerms } from "@components/template";

import { useLogin } from "./hooks";
import { Bottom, Middle, Top, UserTypeModal } from "./components";
import styles from "./styles";

const Initial: FC = () => {
  const { privacyTermsRef, show, userTypeRef, userTypeModal } = useLogin();

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

export default Initial;
