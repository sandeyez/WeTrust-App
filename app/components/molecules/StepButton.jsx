/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  StyleSheet, Alert,
} from 'react-native';
import colors from '../../config/colors';
import ButtonText from '../atoms/ButtonText';
import Separator from '../atoms/Separator';
import SmallText from '../atoms/SmallText';
import AppButton from '../atoms/AppButton';
import { useSteps } from '../../contexts/stepContext';

function StepButton({ style, navigation }) {
  const {
    stepIndex, recordStep, allSteps, route, setRoute,
  } = useSteps();

  function handlePress() {
    if (stepIndex < allSteps.length || route === '') {
      switch (allSteps[stepIndex - 1].id) {
        case (6):
          Alert.alert('Randomization', 'What method will be used for this patient?', [
            {
              text: 'Direct to angio suite',
              onPress: () => {
                setRoute('DTAS');
                recordStep('Direct to angio suite');
              },
            },
            {
              text: 'Conventional Route',
              onPress: () => {
                setRoute('CR');
                recordStep('Conventional route');
              },
            },
          ]);
          break;
        case (10):
          Alert.alert('Thrombolytics Administration', 'Were thrombolytics given?', [
            {
              text: 'Yes',
              onPress: () => {
                recordStep('Thrombolytics given');
              },
            },
            {
              text: 'No',
              onPress: () => {
                recordStep('No thrombolytics given');
              },
            },
          ]);
          break;
        default:
          recordStep();
          break;
      }
    } else {
      navigation.navigate('End');
    }
  }

  return (
    <AppButton style={[styles.container, style]} onPress={() => handlePress()}>
      <ButtonText style={{ textAlign: 'center' }}>{allSteps[stepIndex - 1].title}</ButtonText>
      <Separator style={{ marginVertical: 10 }} />
      <SmallText color={colors.secondary}>
        Stap
        {' '}
        {stepIndex}
        {' '}
        van
        {' '}
        {allSteps.length}
      </SmallText>
    </AppButton>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 180,
    borderColor: colors.main,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: 'white',
  },
});

export default StepButton;
