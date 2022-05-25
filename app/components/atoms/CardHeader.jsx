import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../config/colors";

function CardHeader({
  bold = true,
  children,
  color = colors.main,
  style,
  ...otherProps
}) {
  return (
    <Text
      style={[
        { fontWeight: bold ? "bold" : "normal", color },
        styles.cardHeader,
        style,
      ]}
      {...otherProps}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  cardHeader: {
    fontSize: 20,
  },
});

export default CardHeader;
