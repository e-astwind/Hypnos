import { TouchableOpacity } from "react-native";
import React from "react";

interface IconProps {
  name: string;
  size: number;
  color: string;
  icon: React.ComponentType<any>;
  onPress?: () => void;
  styles?: any;
}

export function Icon({ name, size, color, icon, onPress, styles }: IconProps) {
  let Icon = icon;

  return (
    <TouchableOpacity
      style={{ ...styles }}
      disabled={!!onPress}
      onPress={onPress}
    >
      <Icon name={name} size={size} color={color} />
    </TouchableOpacity>
  );
}
