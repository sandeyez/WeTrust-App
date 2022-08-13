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
import steps from '../../config/steps';

function StepButton({ style, navigation }) {
  const { stepIndex, recordStep } = useSteps();

  function handlePress() {
    if (stepIndex < steps.length) {
      // eslint-disable-next-line no-unused-expressions
      stepIndex !== 6 ? recordStep()
        : Alert.alert('Randomization', 'What method will be used for this patient?', [
          {
            text: 'Direct to angio suite',
            onPress: () => {
              recordStep('Direct to angio suite');
            },
          },
          { text: 'Conventional Route', onPress: () => { recordStep('Conventional route'); } },
        ]);
    } else {
      navigation.navigate('End');
    }
  }

  return (
    <AppButton style={[styles.container, style]} onPress={() => handlePress()}>
      <ButtonText style={{ textAlign: 'center' }}>{steps[stepIndex - 1].title}</ButtonText>
      <Separator style={{ marginVertical: 10 }} />
      <SmallText color={colors.secondary}>
        Stap
        {' '}
        {stepIndex}
        {' '}
        van
        {' '}
        {steps.length}
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
