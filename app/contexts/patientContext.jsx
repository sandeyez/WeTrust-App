import { createContext, useContext, useState } from "react";

const PatientContext = createContext();

export function PatientProvider({ children }) {
  const [patientNumber, setPatientNumber] = useState();

  const value = {
    patientNumber,
    setPatientNumber,
  };
  return (
    <PatientContext.Provider value={value}>{children}</PatientContext.Provider>
  );
}

export function usePatient() {
  return useContext(PatientContext);
}
