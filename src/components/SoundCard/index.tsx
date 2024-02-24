import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./style";
import { colors } from "../../theme/colors";
import { Icon } from "../Icon";

interface SoundCardProps {
  image: string;
  title: string;
  details: string;
  onPress: () => void;
}

export function SoundCard({ image, title, details, onPress }: SoundCardProps) {
  const screenStyles = styles();
  return (
    <TouchableOpacity style={screenStyles.container} onPress={onPress}>
      <View>
        <Image source={{ uri: image }} style={screenStyles.image} />
        <Icon
          name="caretright"
          size={22}
          color={colors.primaryLight}
          icon={AntDesign}
          styles={screenStyles.iconContainer}
        />
      </View>
      <View style={screenStyles.detailsContainer}>
        <Text style={screenStyles.title}>{title}</Text>
        <Text style={screenStyles.details}>{details}</Text>
      </View>
    </TouchableOpacity>
  );
}
