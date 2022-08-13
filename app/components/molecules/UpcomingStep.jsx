/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  View, StyleSheet,
} from 'react-native';
import Header from '../atoms/Header';
import SmallText from '../atoms/SmallText';

function UpcomingStep({ step }) {
  return (
    <View style={styles.container}>
      <SmallText>Volgende stap:</SmallText>
      <Header bold>{step.title}</Header>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default UpcomingStep;
