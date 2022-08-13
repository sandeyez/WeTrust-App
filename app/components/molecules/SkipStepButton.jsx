/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import AppButton from '../atoms/AppButton';
import colors from '../../config/colors';
import SmallText from '../atoms/SmallText';
import { useSteps } from '../../contexts/stepContext';

function SkipStepButton({ style }) {
  const { skipStep } = useSteps();
  return (
    <AppButton style={[styles.container, style]} onPress={skipStep}>
      <SmallText style={styles.text}>Stap overslaan</SmallText>
      <Entypo name="chevron-small-right" size={24} color="white" />
    </AppButton>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.main,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    paddingLeft: 20,
  },
  text: {
    color: 'white',
  },
});

export default SkipStepButton;
