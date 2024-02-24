import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";
import { Icon } from "../Icon";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../theme/colors";

interface PersonalitySoundCardProps {
  icon: string;
  iconName: any;
  empty: boolean;
  onPress: () => void;
}

export default function PersonalitySoundCard({
  empty = true,
  icon,
  iconName,
  onPress,
}: PersonalitySoundCardProps) {
  const screenStyles = styles();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        screenStyles.container,
        {
          opacity: empty ? 0.5 : 1,
        },
      ]}
    >
      <Icon
        name={icon ?? "add-outline"}
        size={38}
        color={colors.primary}
        icon={iconName ?? Ionicons}
      />
    </TouchableOpacity>
  );
}
