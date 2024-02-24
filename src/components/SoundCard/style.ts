import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = () => {
  const screenWidht = Dimensions.get("window").width;

  return StyleSheet.create({
    container: {
      width: screenWidht,
      gap: 6,
      flexDirection: "row",
      height: 146,
      maxWidth: "100%",
      alignItems: "flex-start",
    },
    image: {
      width: 146,
      height: 146,
    },
    title: {
      fontSize: 16,
      fontWeight: "bold",
      color: colors.primaryLight,
    },
    iconContainer: {
      position: "absolute",
      right: 0,
      top: 0,
      borderWidth: 1,
      borderColor: colors.primaryLight,
      borderRadius: 50,
      margin: 10,
      padding: 6,
    },
    detailsContainer: {
      flex: 1,
      height: "100%",
      padding: 10,
      gap: 6,
    },
    details: {
      fontSize: 14,
      opacity: 0.7,
      color: colors.primaryLight,
      flex: 1,
      flexShrink: 1,
      flexGrow: 1,
    },
  });
};
