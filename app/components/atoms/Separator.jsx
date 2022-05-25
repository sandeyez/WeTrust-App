import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../../config/colors";

function Separator({ width = 60, color = colors.secondary, style }) {
  return (
    <View
      style={[styles.separator, { width, backgroundColor: color }, style]}
    ></View>
  );
}

const styles = StyleSheet.create({
  separator: {
    height: 1,
    alignSelf: "center",
  },
});

export default Separator;
