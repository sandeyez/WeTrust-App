import React, { useState } from "react";
import { useSteps } from "../../contexts/stepContext";
import AppInput from "../atoms/AppInput";
import StepData from "../templates/StepData";
import { StyleSheet, View } from "react-native";
import SmallButton from "./SmallButton";

function StepNotes({ style, value, id }) {
  const { editStep } = useSteps();
  const [editing, setEditing] = useState(false);

  console.log(value);

  return (
    <>
      {!editing ? (
        <StepData
          style={style}
          onEdit={() => setEditing(true)}
          title="Notities:"
          value={value ? value : "-"}
        />
      ) : (
        <View style={styles.container}>
          <AppInput
            style={styles.input}
            onBlur={(text) => {
              setEditing(false);
              editStep(id, "notes", text);
            }}
            value={value}
          />
          <SmallButton
            style={styles.button}
            onPress={() => setEditing(false)}
            iconName="check"
          />
        </View>
      )}
    </>
  );
}

export default StepNotes;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  input: {
    flex: 1,
  },
  button: {
    marginLeft: 8,
  },
});
