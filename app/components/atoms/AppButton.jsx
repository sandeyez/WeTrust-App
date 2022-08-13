/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
  },
});

function AppButton({ style, children, ...otherProps }) {
  return (
    <Pressable style={[styles.button, style]} {...otherProps}>
      {children}
    </Pressable>
  );
}

export default AppButton;
