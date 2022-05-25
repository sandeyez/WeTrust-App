import React from "react";
import { Text, StyleSheet } from "react-native";

import colors from "../../config/colors";

function Header({
  bold = false,
  children,
  color = colors.main,
  style,
  ...otherProps
}) {
  return (
    <Text
      style={[
        styles.header,
        { fontWeight: bold ? "bold" : "normal", color },
        style,
      ]}
      {...otherProps}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
  },
});

export default Header;
