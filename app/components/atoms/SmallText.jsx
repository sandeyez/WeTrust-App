/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import colors from '../../config/colors';

function SmallText({
  bold = false,
  children,
  color = colors.main,
  style,
  ...otherProps
}) {
  return (
    <Text
      style={[
        styles.smallText,
        { fontWeight: bold ? 'bold' : 'normal', color },
        style,
      ]}
      {...otherProps}
    >
      {children}
    </Text>
  );
}

export default SmallText;

const styles = StyleSheet.create({
  smallText: {
    fontSize: 14,
  },
});
