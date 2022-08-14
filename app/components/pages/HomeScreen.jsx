/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useSteps } from '../../contexts/stepContext';
import SkipStepButton from '../molecules/SkipStepButton';
import StepButton from '../molecules/StepButton';
import UpcomingStep from '../molecules/UpcomingStep';
import AppHeader from '../organisms/AppHeader';
import PreviousSteps from '../templates/PreviousSteps';
import Screen from '../templates/Screen';
import PatientInfoModal from '../molecules/PatientInfoModal';
import { usePatient } from '../../contexts/patientContext';

function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(true);
  const { stepIndex, allSteps } = useSteps();
  const { patientNumber } = usePatient();

  useEffect(() => {
    setModalVisible(!patientNumber);
  }, []);

  return (
    <Screen style={styles.container}>
      <AppHeader navigation={navigation} />
      {stepIndex < allSteps.length - 1 && (<UpcomingStep step={allSteps[stepIndex]} />)}
      <StepButton style={styles.stepButton} navigation={navigation} />
      {stepIndex < allSteps.length && (
      <SkipStepButton style={styles.skipStepButton} />
      )}
      <PreviousSteps />
      <PatientInfoModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  stepButton: {
    marginTop: 20,
    marginBottom: 10,
  },
  skipStepButton: {
    alignSelf: 'flex-end',
  },
});

export default HomeScreen;
