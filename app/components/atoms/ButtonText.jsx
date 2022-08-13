/* eslint-disable react/prop-types */
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
  buttonHeader: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});

function ButtonText({ children, color = colors.main, style }) {
  return (
    <Text style={[styles.buttonHeader, { color }, style]}>{children}</Text>
  );
}

export default ButtonText;
