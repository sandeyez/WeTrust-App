/* eslint-disable linebreak-style */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer';
import moment from 'moment';
import Header from '../atoms/Header';
import AppButton from '../atoms/AppButton';
import colors from '../../config/colors';
import settings from '../../config/settings';
import { usePatient } from '../../contexts/patientContext';
import { useSteps } from '../../contexts/stepContext';

function SendEmailButton({ display, navigation }) {
  const { patientNumber, clearPatientInfo } = usePatient();
  const { steps, clearSteps, allSteps } = useSteps();

  function sendEmail() {
    const options = {
      subject: settings.emailHeader + patientNumber,
      recipients: [settings.emailRecipient],
      body: formatSteps(),
    };

    const promise = new Promise((resolve, reject) => {
      MailComposer.composeAsync(options)
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });
    promise.then(
      () => {
        Alert.alert('Email verstuurd!', undefined, [
          {
            text: 'OK',
            onPress: () => {
              clearPatientInfo();
              setTimeout(() => {
                navigation.navigate('Home');
                clearSteps();
              }, 500);
            },
          },
        ]);
      },
      (error) => {
        Alert.alert(
          'Er is wat misgegaan met het versturen van de mail',
          error.status,
        );
        console.error(error);
      },
    );
  }

  function formatSteps() {
    let string = '';

    // eslint-disable-next-line array-callback-return
    steps.map((step, index) => {
      let stepString = '';
      stepString += index + 1;
      stepString += ' ';
      stepString += allSteps[index].title;
      stepString += ' ';
      stepString += moment(step.datetime).format('DD-MM-YYYY HH:mm');
      stepString += step.notes && '\n';
      stepString += step.notes;

      string += `${stepString}\n`;
    });

    return string;
  }

  return (
    display && (
      <AppButton style={styles.button} onPress={() => sendEmail()}>
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
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: colors.secondary,
    padding: 16,
    flexDirection: 'row',
  },
});

export default SendEmailButton;
