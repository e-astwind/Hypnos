import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = () => {
  return StyleSheet.create({
    container: {
      backgroundColor: colors.primary,
      flex: 1,
      padding: 20,
      paddingTop: 20,
    },
    title: {
      fontSize: 22,
      color: colors.primaryLight,
      fontWeight: "bold",
      marginBottom: 20,
    },
    logoContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 40,
    },
    logo: {
      width: 48,
      height: 48,
    },
  });
};
