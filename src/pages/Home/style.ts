import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = () => {
  const screenWidht = Dimensions.get("window").width;

  return StyleSheet.create({
    container: {
      backgroundColor: colors.primary,
      flex: 1,
      padding: 20,
      paddingTop: 40,
    },
    title: {
      fontSize: 22,
      color: colors.primaryLight,
      fontWeight: "bold",
      marginBottom: 20,
    },
  });
};
