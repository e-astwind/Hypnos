import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./style";
import {
  FontAwesome,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import { Icon } from "../../components/Icon";
import { colors } from "../../theme/colors";

export function Play({ navigation, route: { params } }) {
  const [statusCurrentSound, setStatusCurrentSound] = React.useState(false);
  const screenStyles = styles();

  const switchStatusSound = () => {
    setStatusCurrentSound(!statusCurrentSound);
  };

  return (
    <View style={screenStyles.container}>
      <View style={screenStyles.logoContainer}>
        <Icon
          onPress={() => navigation.goBack()}
          name="angle-left"
          size={38}
          color="white"
          icon={FontAwesome}
        />

        <Image
          source={require("../../assets/images/forest.png")}
          style={screenStyles.logo}
        />
        <Icon
          name="heart-outline"
          size={28}
          color={colors.primaryLight}
          icon={MaterialCommunityIcons}
        />
      </View>
      <Image
        source={{
          uri: params.image,
        }}
        style={screenStyles.image}
      />

      <Text style={screenStyles.title}>{params.title}</Text>

      <View style={screenStyles.controlsContainer}>
        <Icon
          name="timer-settings-outline"
          size={28}
          color={colors.primaryLight}
          icon={MaterialCommunityIcons}
        />
        <Icon
          onPress={switchStatusSound}
          name={statusCurrentSound ? "play" : "pause"}
          size={34}
          color={colors.primaryLight}
          icon={FontAwesome}
        />
        <Icon
          name="dots-three-horizontal"
          size={28}
          color={colors.primaryLight}
          icon={Entypo}
        />
      </View>
    </View>
  );
}
