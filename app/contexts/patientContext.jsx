import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSteps } from "./stepContext";

const PatientContext = createContext();

export function PatientProvider({ children }) {
  const [patientNumber, setPatientNumber] = useState();
  const {clearSteps} = useSteps();

  useEffect(() => {
    getPatientNumber();
  }, []);

  useEffect(() => {
    console.log("Patient number changed!");
    console.log(patientNumber);
    if (patientNumber) savePatientNumber();
  }, [patientNumber]);

  // Get patient number from storage
  function getPatientNumber() {
    console.log("Getting patient number...");
    AsyncStorage.getItem("patientNumber").then((value) => {
      console.log("Patient number found:", value);
      if (value !== null) {
        setPatientNumber(parseInt(value));
      }
    });
  }

  // Save patient number to storage
  function savePatientNumber() {
    console.log("Saving patient number...");
    AsyncStorage.setItem("patientNumber", patientNumber.toString());
  }

  function clearPatientInfo() {
    setPatientNumber(null);
    AsyncStorage.clear();
    clearSteps();
  }

  const value = {
    patientNumber,
    setPatientNumber,
    clearPatientInfo
  };
  return (
    <PatientContext.Provider value={value}>{children}</PatientContext.Provider>
  );
}

export function usePatient() {
  return useContext(PatientContext);
}
