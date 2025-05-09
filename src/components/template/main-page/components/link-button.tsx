import { FC, memo, useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Href, Link } from "expo-router";

import { colors } from "@data/constants";

interface props {
  title: string;
  icon: React.ReactNode;
  href: Href;
  pathname: string;
}

export const LinkButton: FC<props> = memo(({ ...props }) => {
  const isTheCurrentRoute = useMemo(() => props.pathname === props.href.toString(), [props.pathname]);

  return (
    <Link href={props.href}>
      <View style={styles["container"]}>
        {props.icon}
        <Text style={[styles["title"], isTheCurrentRoute && { color: colors["primary-blue"] }]}>{props.title}</Text>
      </View>
    </Link>
  );
});

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 2,
  },
  title: {
    fontSize: 14,
    fontFamily: "Montserrat-Medium",
    color: colors["gray-800"],
  },
});
