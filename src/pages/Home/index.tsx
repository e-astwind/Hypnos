import { View, Text } from "react-native";
import React from "react";
import { SoundCard } from "../../components/SoundCard";
import { colors } from "../../theme/colors";

export function Home() {
  return (
    <View
      style={{
        backgroundColor: colors.primary,
        flex: 1,
      }}
    >
      <SoundCard
        image="https://i.pinimg.com/564x/dc/fb/cd/dcfbcd244ab5f153298318550df43c5b.jpg"
        title="Floresta Chuvosa"
        onPress={() => {}}
      />
    </View>
  );
}
