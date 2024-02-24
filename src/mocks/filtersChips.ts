import {
  MaterialCommunityIcons,
  FontAwesome5,
  Entypo,
  Ionicons,
} from "@expo/vector-icons";

interface FilterChipProps {
  id: number;
  name: string;
  icon: string;
  iconName: any;
  selected: boolean;
}

export const filterChips: FilterChipProps[] = [
  {
    id: 0,
    name: "Todos",
    icon: "earth",
    iconName: Ionicons,
    selected: true,
  },
  {
    id: 1,
    name: "Floresta",
    icon: "tree-outline",
    iconName: MaterialCommunityIcons,
    selected: false,
  },
  {
    id: 2,
    name: "Praia",
    icon: "beach",
    iconName: MaterialCommunityIcons,
    selected: false,
  },
  {
    id: 3,
    name: "Chuva",
    icon: "cloud-rain",
    iconName: FontAwesome5,
    selected: false,
  },
  {
    id: 4,
    name: "Cachoeira",
    icon: "water",
    iconName: Entypo,
    selected: false,
  },
  {
    id: 5,
    name: "Fogueira",
    icon: "campfire",
    iconName: MaterialCommunityIcons,
    selected: false,
  },
];
