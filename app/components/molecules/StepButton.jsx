import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import colors from "../../config/colors";
import ButtonText from "../atoms/ButtonText";
import Separator from "../atoms/Separator";
import SmallText from "./../atoms/SmallText";
import AppButton from "./../atoms/AppButton";
import { useSteps } from "../../contexts/stepContext";
import steps from "../../config/steps";
import settings from "../../config/settings";

function StepButton({ style, navigation }) {
  const { stepIndex, recordStep } = useSteps();

  function handlePress() {
    if (stepIndex < steps.length) recordStep();
    else {
      navigation.navigate("End");
    }
  }

  return (
    <AppButton style={[styles.container, style]} onPress={handlePress}>
      <ButtonText>{steps[stepIndex - 1]}</ButtonText>
      <Separator style={{ marginVertical: 10 }} />
      <SmallText color={colors.secondary}>
        Stap {stepIndex} van {steps.length}
      </SmallText>
    </AppButton>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 180,
    borderColor: colors.main,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    backgroundColor: "white",
  },
});

export default StepButton;
