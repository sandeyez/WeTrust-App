import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";

function SplashScreen(props) {
  return (
    <ImageBackground
      source={require("../../../assets/splash.png")}
      style={{ width: "100%", height: "100%" }}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default SplashScreen;
