import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = () => {
  const screenWidht = Dimensions.get("window").width;
  return StyleSheet.create({
    container: {
      backgroundColor: colors.primary,
      flex: 1,
      padding: 20,
      paddingTop: 20,
    },
    image: {
      width: screenWidht * 0.9,
      height: 380,
      borderRadius: 100,
      alignSelf: "center",
    },
    controlsContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 30,
      gap: 48,
    },
    title: {
      fontSize: 20,
      marginTop: 20,
      color: colors.primaryLight,
      fontWeight: "bold",
      textAlign: "center",
    },

    logoContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 40,
    },
    logo: {
      width: 48,
      height: 48,
    },
  });
};
