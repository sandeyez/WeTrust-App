/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
  cardHeader: {
    fontSize: 20,
  },
});

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
        { fontWeight: bold ? 'bold' : 'normal', color },
        styles.cardHeader,
        style,
      ]}
      {...otherProps}
    >
      {children}
    </Text>
  );
}
export default CardHeader;
