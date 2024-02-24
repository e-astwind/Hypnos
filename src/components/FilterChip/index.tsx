import React from "react";
import { TouchableOpacity } from "react-native";
import { colors } from "../../theme/colors";

interface FilterChipProps {
  index: number;
  onPress: (id: any) => void;
  selected: boolean;
  children: React.ReactNode;
}

export default function FilterChip({
  index,
  onPress,
  selected,
  children,
}: FilterChipProps) {
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: selected ? colors.primary : colors.primaryLight,
          padding: 6,
          height: 40,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          gap: 4,
        },
      ]}
      onPress={() => onPress(index)}
    >
      {children}
    </TouchableOpacity>
  );
}
