import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import steps from "../../config/steps";
import { usePatient } from "../../contexts/patientContext";
import { useSteps } from "../../contexts/stepContext";
import PatientNumber from "../molecules/PatientNumber";
import SkipStepButton from "../molecules/SkipStepButton";
import StepButton from "../molecules/StepButton";
import AppHeader from "../organisms/AppHeader";
import PreviousSteps from "../templates/PreviousSteps";
import Screen from "../templates/Screen";
import PatientInfoModal from "./../molecules/PatientInfoModal";

function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState();
  const { stepIndex } = useSteps();

  useEffect(() => {
    setModalVisible(true);
  }, []);

  return (
    <Screen style={styles.container}>
      <AppHeader navigation={navigation}/>
      <StepButton style={styles.stepButton} navigation={navigation} />
      {stepIndex < steps.length && (
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
    alignSelf: "flex-end",
  },
});

export default HomeScreen;
