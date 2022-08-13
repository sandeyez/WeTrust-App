/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../../config/colors';

function Separator({ width = 60, color = colors.secondary, style }) {
  return (
    <View
      style={[styles.separator, { width, backgroundColor: color }, style]}
    />
  );
}

const styles = StyleSheet.create({
  separator: {
    height: 1,
    alignSelf: 'center',
  },
});

export default Separator;
