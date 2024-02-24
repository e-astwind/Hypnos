import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { SoundCard } from "../../components/SoundCard";
import { styles } from "./style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FilterChip from "../../components/FilterChip";
import { Icon } from "../../components/Icon";

export function Home({ navigation }) {
  const [filterSelectedSound, setFilterSelectedSound] = React.useState([
    {
      id: 1,
      name: "Floresta",
      icon: "tree",
      selected: true,
    },
    {
      id: 2,
      name: "Praia",
      icon: "beach",
      selected: false,
    },
    {
      id: 3,
      name: "Chuva",
      icon: "cloud",
      selected: false,
    },
    {
      id: 4,
      name: "Cachoeira",
      icon: "water",
      selected: false,
    },
    {
      id: 5,
      name: "Fogueira",
      icon: "fire",
      selected: false,
    },
  ]);
  const [sounds, setSounds] = React.useState([
    {
      title: "Rio",
      image:
        "https://i.pinimg.com/originals/7d/55/ec/7d55ec37173aea85e8ba118cc7a7b987.gif",
      details:
        "O murmúrio suave de um rio em seu curso transmite calma e tranquilidade, levando embora as preocupações do dia.",
    },
    {
      title: "Praia",
      image:
        "https://i.pinimg.com/originals/df/7d/b5/df7db5d92f18d321f1163033d5f19963.gif",
      details:
        "O rugido distante de uma cachoeira cria uma melodia poderosa que acalma a mente e renova o espírito.",
    },
    {
      title: "Cachoeira",
      image:
        "https://i.pinimg.com/originals/6c/ca/f0/6ccaf06d049c8922a26a47a9373a8f40.gif",
      details:
        "O som suave das ondas quebrando na costa e o murmúrio do vento marítimo formam uma melodia relaxante que convida ao descanso.",
    },
  ]);

  const selectedFilterChip = (id: number) => {
    const newFilterSelectedSound = filterSelectedSound.map((item) => {
      if (item.id === id) {
        item.selected = true;
      } else {
        item.selected = false;
      }
      return item;
    });

    setFilterSelectedSound(newFilterSelectedSound);
  };

  const selectedSound = (data: (typeof sounds)[0]) => {
    navigation.navigate("Play", data);
  };

  const screenStyles = styles();
  return (
    <View style={screenStyles.container}>
      <View style={screenStyles.logoContainer}>
        <Icon
          name="menu"
          size={38}
          color="white"
          styles={{
            position: "absolute",
            left: 10,
            top: 10,
          }}
          icon={MaterialCommunityIcons}
          // onPress={() => navigation.openDrawer()}
        />

        <Image
          source={require("../../assets/images/forest.png")}
          style={screenStyles.logo}
        />
      </View>
      <Text style={screenStyles.title}>Escolha um som para relaxar</Text>
      <View>
        <FlatList
          data={filterSelectedSound}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            height: 60,
          }}
          ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
          renderItem={({ item }) => {
            return (
              <FilterChip
                textStyle={{ color: "#FFF" }}
                icon={item.icon}
                index={item.id}
                onPress={(id) => selectedFilterChip(id)}
                selected={item.selected}
              >
                {item.name}
              </FilterChip>
            );
          }}
          keyExtractor={(data) => data.id.toString()}
        />
      </View>
      <FlatList
        data={sounds}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        renderItem={({ item }) => {
          return (
            <SoundCard
              image={item.image}
              title={item.title}
              details={item.details}
              onPress={() => selectedSound(item)}
            />
          );
        }}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
}
