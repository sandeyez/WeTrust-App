import React from "react";
import Header from "../atoms/Header";
import { usePatient } from "../../contexts/patientContext";

function PatientNumber(props) {
  const { patientNumber } = usePatient();

  if (!patientNumber) return null;

  return <Header bold>Patiënt {patientNumber}</Header>;
}

export default PatientNumber;
