import React from "react";
import { StyleSheet, Alert } from "react-native";
import Header from "../atoms/Header";
import AppButton from "../atoms/AppButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";
import * as MailComposer from "expo-mail-composer";
import settings from "../../config/settings";
import { usePatient } from "../../contexts/patientContext";
import { useSteps } from "../../contexts/stepContext";
import allSteps from "../../config/steps";
import moment from "moment";

function SendEmailButton({ display }) {
  const { patientNumber } = usePatient();
  const { steps } = useSteps();

  function sendEmail() {
    const options = {
      subject: settings.emailHeader + patientNumber,
      recipients: [settings.emailRecipient],
      body: formatSteps(),
    };

    let promise = new Promise((resolve, reject) => {
      MailComposer.composeAsync(options)
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });
    promise.then(
      (result) => Alert.alert("Status: email " + result.status),
      (error) => Alert.alert("Status: email " + error.status)
    );
  }

  console.log(formatSteps());

  function formatSteps() {
    let string = "";

    steps.map((step, index) => {
      let stepString = "";
      stepString += index + 1;
      stepString += " ";
      stepString += allSteps[index];
      stepString += " ";
      stepString += moment(step.datetime).format("DD-MM-YYYY HH:mm");
      stepString += step.notes && "\n";
      stepString += step.notes;

      string += stepString + "\n";
    });

    return string;
  }

  return (
    display && (
      <AppButton style={styles.button} onPress={sendEmail}>
        <Header color="white" bold>
          Ja, verstuur
        </Header>
        <MaterialCommunityIcons
          name="send"
          size={24}
          color="white"
          style={{ marginLeft: 5 }}
        />
      </AppButton>
    )
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: colors.secondary,
    padding: 16,
    flexDirection: "row",
  },
});

export default SendEmailButton;
