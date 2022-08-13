/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppButton from '../atoms/AppButton';
import colors from '../../config/colors';

function SmallButton({ style, onPress, iconName = 'pencil' }) {
  return (
    <AppButton style={[styles.button, style]} onPress={onPress}>
      <MaterialCommunityIcons name={iconName} size={24} color="white" />
    </AppButton>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary,
    borderRadius: 8,
    padding: 5,
    height: 35,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SmallButton;
