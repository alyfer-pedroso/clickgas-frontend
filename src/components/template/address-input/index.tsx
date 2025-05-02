import { FC, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { Octicons, MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "@data/constants";

import { SearchInput } from "../search-input";
import styles from "./styles";

interface props {
  address?: string;
  onAddressChange?: (value: string) => void;
}

export const AddressInput: FC<props> = ({ ...props }) => {
  const [address, setAddress] = useState({ show: false, value: props?.address ?? "" });

  const onChange = (value: string) => setAddress((state) => ({ ...state, value }));

  const showAddress = () => {
    if (!address.value.trim()) return;
    setAddress((state) => ({ ...state, show: true }));
    props?.onAddressChange?.(address.value);
  };

  const hideAddress = () => {
    setAddress(() => ({ value: "", show: false }));
    props?.onAddressChange?.("");
  };

  return (
    <View style={styles["container"]}>
      <SearchInput placeholder="Endereço e número" value={address.value} onChangeText={onChange} onSubmitEditing={showAddress} />

      {address.show && (
        <View style={styles["card"]}>
          <Octicons name="home" size={24} color={colors["primary-blue"]} />

          <View style={styles["textContainer"]}>
            <Text style={styles["titleText"]}>Localização cadastrada</Text>
            <Text style={styles["addressText"]}>{address.value}</Text>
          </View>

          <Pressable style={{ marginLeft: "auto" }} onPress={hideAddress}>
            <MaterialCommunityIcons name="close-circle-outline" size={30} color={colors["primary-blue"]} />
          </Pressable>
        </View>
      )}
    </View>
  );
};
