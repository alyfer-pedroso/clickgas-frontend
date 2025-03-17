import { FC } from "react";
import { View } from "react-native";

interface props {
  header: { title: string; back?: boolean };
  button: { title: string; onClick: VoidFunction | (() => Promise<void>) };
  children: React.ReactNode;
}

export const Registration: FC<props> = ({ ...props }) => {
  return <View>{props.children}</View>;
};
