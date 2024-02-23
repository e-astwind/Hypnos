import { Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./style";
import { colors } from "../../theme/colors";
import { Icon } from "../Icon";

interface SoundCardProps {
  image: string;
  title: string;
  onPress: () => void;
}

export function SoundCard({ image, title, onPress }: SoundCardProps) {
  const screenStyles = styles();
  return (
    <TouchableOpacity style={screenStyles.container} onPress={onPress}>
      <Image source={{ uri: image }} style={screenStyles.image} />
      <Text style={screenStyles.title}>{title}</Text>
      <Icon
        name="caretright"
        size={22}
        color={colors.primaryLight}
        icon={AntDesign}
        styles={screenStyles.iconContainer}
      />
    </TouchableOpacity>
  );
}
