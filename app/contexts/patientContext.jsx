/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, {
  createContext, useContext, useEffect, useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMemo } from 'react';
import { useSteps } from './stepContext';

const PatientContext = createContext();

export function PatientProvider({ children }) {
  const [patientNumber, setPatientNumber] = useState();
  const { clearSteps } = useSteps();

  useEffect(() => {
    getPatientNumber();
  }, []);

  useEffect(() => {
    if (patientNumber) savePatientNumber();
  }, [patientNumber]);

  // Get patient number from storage
  function getPatientNumber() {
    AsyncStorage.getItem('patientNumber').then((value) => {
      if (value !== null) {
        setPatientNumber(parseInt(value, 10));
      }
    });
  }

  // Save patient number to storage
  function savePatientNumber() {
    AsyncStorage.setItem('patientNumber', patientNumber.toString());
  }

  function clearPatientInfo() {
    setPatientNumber(null);
    AsyncStorage.clear();
    clearSteps();
  }

  const value = useMemo({
    patientNumber,
    setPatientNumber,
    clearPatientInfo,
  }, [patientNumber]);

  return (
    <PatientContext.Provider value={value}>{children}</PatientContext.Provider>
  );
}

export function usePatient() {
  return useContext(PatientContext);
}
