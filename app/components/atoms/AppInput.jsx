/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
  input: {
    height: 80,
    borderColor: colors.main,
    borderWidth: 1,
    textAlignVertical: 'top',
    padding: 10,
    color: colors.main,
  },
});

function AppInput({
  style, onBlur = () => {}, value = '', ...otherProps
}) {
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

export default AppInput;
