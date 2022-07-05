import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Alert } from "react-native";
import Screen from "./../templates/Screen";
import PatientNumber from "./../molecules/PatientNumber";
import PreviousSteps from "../templates/PreviousSteps";
import Header from "../atoms/Header";
import { useSteps } from "../../contexts/stepContext";
import SmallText from "../atoms/SmallText";
import SendEmailButton from "../molecules/SendEmailButton";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import { usePatient } from "../../contexts/patientContext";

function EndScreen({ navigation }) {
  const [errorSteps, setErrorSteps] = useState();
  const { steps } = useSteps();
  const { clearPatientInfo } = usePatient();

  useEffect(() => {
    checkSteps();
  }, [steps]);

  function checkSteps() {
    let result = [];

    for (let i = 0; i < steps.length; i++) {
      const step = steps[i];

      if (step.datetime === null) result.push(i + 1);
    }

    setErrorSteps(result);
  }

  function handleReset() {
    Alert.alert("Weet je zeker dat je deze patiënt wil resetten?","Alle opgeslagen informatie gaat verloren.", 
    [{text: "Ja", onPress: () => {clearPatientInfo(); navigation.navigate("Home")}}, {text: "Nee", onPress: () => {}}])
  }

  return (
    <Screen style={styles.container}>
      <View style={styles.header}>
        <PatientNumber />
        <TouchableWithoutFeedback onPress={handleReset}>
          <MaterialCommunityIcons name="reload" size={24} color="black" />
        </TouchableWithoutFeedback>
      </View>

      <Header style={{ marginBottom: 8 }}>Zijn deze gegevens correct?</Header>

      {errorSteps?.length > 0 && (
        <SmallText color="red">
          Step{errorSteps.length > 1 && "s"}{" "}
          {errorSteps.reduce((prev, curr) => `${prev}, ${curr}`)} mis
          {errorSteps.length > 1 ? "sen" : "t"} nog data
        </SmallText>
      )}

      <PreviousSteps />
      <SendEmailButton display={errorSteps?.length === 0} navigation={navigation}/>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    alignItems: "center",
  },
});

export default EndScreen;
