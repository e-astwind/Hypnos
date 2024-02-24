import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = () => {
  return StyleSheet.create({
    container: {
      backgroundColor: colors.primaryLight,
      width: 66,
      height: 66,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
    },
  });
};
