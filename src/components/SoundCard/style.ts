import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = () => {
  const screenWidht = Dimensions.get("window").width;

  return StyleSheet.create({
    container: {
      width: screenWidht / 2.5,
      gap: 6,
      justifyContent: "center",
      alignItems: "flex-start",
    },
    image: {
      width: screenWidht / 2.5,
      height: screenWidht / 2.5,
      borderRadius: 10,
    },
    title: {
      fontSize: 16,
      color: colors.primaryLight,
    },
    iconContainer: {
      position: "absolute",
      right: 0,
      top: 0,
      backgroundColor: "rgba(37, 51, 52, 0.8)",
      borderRadius: 50,
      margin: 10,
      padding: 6,
    },
  });
};
