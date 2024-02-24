import { View, Text } from "react-native";
import React, { Children } from "react";
import { Chip, ChipProps } from "react-native-paper";

interface FilterChipProps extends ChipProps {
  index: number;
  onPress: (id: any) => void;
  selected: boolean;
}

export default function FilterChip({
  index,
  onPress,
  selected,
  children,
  ...props
}: FilterChipProps) {
  return (
    <Chip
      {...props}
      key={index}
      onPress={() => onPress(index)}
      selected={selected}
      style={{
        height: 38,
        backgroundColor: selected ? "#C96DE3" : "#323232",
      }}
    >
      {children}
    </Chip>
  );
}
