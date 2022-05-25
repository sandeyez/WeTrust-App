import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from "../../config/colors";

function ButtonText({ children, color = colors.main, style }) {
  return (
    <Text style={[styles.buttonHeader, { color }, style]}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  buttonHeader: {
    fontWeight: "bold",
    fontSize: 24,
  },
});

export default ButtonText;
