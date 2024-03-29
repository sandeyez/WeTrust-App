/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  View, Alert, StyleSheet, TouchableWithoutFeedback,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PatientNumber from '../molecules/PatientNumber';
import { usePatient } from '../../contexts/patientContext';

function AppHeader({ navigation }) {
  const { patientNumber, clearPatientInfo } = usePatient();

  function handleReset() {
    Alert.alert(
      'Weet je zeker dat je deze patiënt wil resetten?',
      'Alle opgeslagen informatie gaat verloren.',
      [{ text: 'Ja', onPress: () => { clearPatientInfo(); navigation.navigate('Home'); } }, { text: 'Nee', onPress: () => {} }],
    );
  }

  if (!patientNumber) { return null; }
  return (
    <View style={styles.header}>
      <PatientNumber />
      <TouchableWithoutFeedback onPress={() => handleReset()}>
        <MaterialCommunityIcons name="reload" size={24} color="black" />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignItems: 'center',
  },
});

export default AppHeader;
