/* eslint-disable global-require */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { ImageBackground } from 'react-native';

function SplashScreen() {
  return (
    <ImageBackground
      source={require('../../../assets/splash.png')}
      style={{ width: '100%', height: '100%' }}
    />
  );
}

export default SplashScreen;
