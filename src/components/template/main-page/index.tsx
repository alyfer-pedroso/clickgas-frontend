import { FC } from "react";
import { Text, View, StyleSheet, ScrollView, StyleProp, ViewStyle, ScrollViewProps } from "react-native";

import { usePathname } from "expo-router";
import { Octicons, Feather } from "@expo/vector-icons";

import { colors } from "@data/constants";

import { LinkButton } from "./components";

interface props {
  children?: React.ReactNode;
  title?: string;
  style?: ScrollViewProps["style"];
  contentContainerStyle?: ScrollViewProps["contentContainerStyle"];
}

export const MainPage: FC<props> = ({ children, ...props }) => {
  const pathname = usePathname();

  return (
    <View style={styles["container"]}>
      {Boolean(props?.title?.trim()) && (
        <View style={styles["header"]}>
          <Text style={styles["header-title"]}>{props.title}</Text>
        </View>
      )}

      <ScrollView style={props?.style} contentContainerStyle={props?.style}>
        {children}
      </ScrollView>

      <View style={styles["bottom"]}>
        <LinkButton
          title="Início"
          href="/main/home"
          pathname={pathname}
          icon={<Octicons name="home" size={28} color={colors["gray-800"]} style={"/main/home" === pathname && { color: colors["primary-blue"] }} />}
        />
        <LinkButton
          title="Perfil"
          href="/main/profile"
          pathname={pathname}
          icon={
            <Feather name="user" size={28} color={colors["gray-800"]} style={"/main/profile" === pathname && { color: colors["primary-blue"] }} />
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
  },
  header: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomColor: colors["third-gray"],
    borderBottomWidth: 2,
  },
  "header-title": {
    fontFamily: "Montserrat-Medium",
    fontSize: 22,
    textAlign: "center",
    color: "#000000",
  },
  bottom: {
    marginTop: "auto",
    minHeight: 62,
    paddingTop: 20,
    paddingBottom: 5,
    backgroundColor: colors["gray-700"],
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    boxShadow: "0px -4px 1px rgba(138, 138, 138, 0.15)",
  },
});
