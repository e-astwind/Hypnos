import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useRef } from "react";
import { styles } from "./style";
import {
  FontAwesome,
  MaterialCommunityIcons,
  Entypo,
  Feather,
} from "@expo/vector-icons";
import { Icon } from "../../components/Icon";
import { colors } from "../../theme/colors";
import { Audio } from "expo-av";
import Slider from "@react-native-community/slider";

export function Play({ navigation, route: { params } }) {
  const [statusCurrentSound, setStatusCurrentSound] = React.useState(false);
  const [volume, setVolume] = React.useState(0.5);
  const screenStyles = styles();

  const soundRef = useRef<Audio.Sound | null>(null);

  soundRef.current?.setVolumeAsync(volume);

  const switchStatusSound = async () => {
    if (statusCurrentSound) {
      await soundRef.current?.playAsync();
    } else {
      await soundRef.current?.pauseAsync();
    }
    setStatusCurrentSound(!statusCurrentSound);
  };

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(params.sound, {
      isLooping: true,
      shouldPlay: false,
    });
    soundRef.current = sound;
    await soundRef.current.playAsync();
  }

  const handleBlur = () => {
    soundRef.current?.unloadAsync();
  };
  const handleFocus = () => {
    playSound();
  };

  useEffect(() => {
    return () => {
      navigation.addListener("blur", handleBlur);
      navigation.addListener("focus", handleFocus);
    };
  }, [navigation]);

  useEffect(() => {
    playSound();
    return () => {
      soundRef.current?.unloadAsync();
    };
  }, []);
  return (
    <View style={screenStyles.container}>
      <View style={screenStyles.logoContainer}>
        <Icon
          onPress={() => navigation.goBack()}
          name="angle-left"
          size={38}
          color={colors.primaryLight}
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
      <View style={screenStyles.volumeContainer}>
        <Icon
          name="volume"
          size={24}
          color={colors.primaryLight}
          icon={Feather}
        />

        <Slider
          style={{ width: "72%", height: 40 }}
          minimumValue={0}
          maximumValue={1}
          value={volume}
          onValueChange={setVolume}
          thumbTintColor="#B5B5DA"
          minimumTrackTintColor="#B5B5DA"
          maximumTrackTintColor={"#929292"}
        />
        <Icon
          name="volume-2"
          size={24}
          color={colors.primaryLight}
          icon={Feather}
        />
      </View>
    </View>
  );
}
