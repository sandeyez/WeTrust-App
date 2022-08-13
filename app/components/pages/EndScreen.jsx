/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
} from 'react-native';
import Screen from '../templates/Screen';
import PreviousSteps from '../templates/PreviousSteps';
import Header from '../atoms/Header';
import { useSteps } from '../../contexts/stepContext';
import SmallText from '../atoms/SmallText';
import SendEmailButton from '../molecules/SendEmailButton';
import AppHeader from '../organisms/AppHeader';
import allSteps from '../../config/steps';

function EndScreen({ navigation }) {
  const [errorSteps, setErrorSteps] = useState([]);
  const [NTHErrorSteps, setNTHErrorSteps] = useState([]);
  const { steps } = useSteps();

  useEffect(() => {
    checkSteps();
    checkOptionalSteps();
  }, [steps]);

  function checkSteps() {
    const result = [];

    for (let i = 0; i < steps.length; i += 1) {
      const step = steps[i];

      if (step.datetime === null && allSteps[i].obligated) result.push(i + 1);
    }

    setErrorSteps(result);
  }

  function checkOptionalSteps() {
    const result = [];

    for (let i = 0; i < steps.length; i += 1) {
      const step = steps[i];

      if (step.datetime === null && !allSteps[i].obligated) result.push(i + 1);
    }
    setNTHErrorSteps(result);
  }

  return (
    <Screen style={styles.container}>
      <AppHeader navigation={navigation} />

      <Header style={{ marginBottom: 8 }}>Zijn deze gegevens correct?</Header>

      {errorSteps?.length > 0 && (
        <SmallText color="red">
          Step
          {errorSteps.length > 1 && 's'}
          {' '}
          {errorSteps.reduce((prev, curr) => `${prev}, ${curr}`)}
          {' '}
          mis
          {errorSteps.length > 1 ? 'sen' : 't'}
          {' '}
          nog data
        </SmallText>
      )}
      {errorSteps?.length > 0 && (
        <SmallText color="orange">
          Step
          {NTHErrorSteps.length > 1 && 's'}
          {' '}
          {NTHErrorSteps.reduce((prev, curr) => `${prev}, ${curr}`)}
          {' '}
          zijn optioneel en mis
          {NTHErrorSteps.length > 1 ? 'sen' : 't'}
          {' '}
          nog data
        </SmallText>
      )}

      <PreviousSteps errorSteps={errorSteps} />
      <SendEmailButton display={errorSteps?.length === 0} navigation={navigation} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignItems: 'center',
  },
});

export default EndScreen;
