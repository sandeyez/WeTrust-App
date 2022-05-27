import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import colors from "../../config/colors";

function AppInput({ style, onBlur = console.log, value = "", ...otherProps }) {
  //const [text, setText] = useState(value);

  return (
    <TextInput
      style={[styles.input, style]}
      onBlur={onBlur}
      value={value}
      multiline
      {...otherProps}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 80,
    borderColor: colors.main,
    borderWidth: 1,
    textAlignVertical: "top",
    padding: 10,
    color: colors.main,
  },
});

export default AppInput;
