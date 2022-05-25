import React from "react";
import { Pressable, StyleSheet } from "react-native";

function AppButton({ style, children, ...otherProps }) {
  return (
    <Pressable style={[styles.button, style]} {...otherProps}>
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
  },
});

export default AppButton;
