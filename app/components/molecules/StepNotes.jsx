import React, { useState } from "react";
import { useSteps } from "../../contexts/stepContext";
import AppInput from "../atoms/AppInput";
import StepData from "../templates/StepData";
import { StyleSheet, View } from "react-native";
import SmallButton from "./SmallButton";

function StepNotes({ style, value, id }) {
  const { editStep } = useSteps();
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(value);

  return (
    <>
      {!editing ? (
        <StepData
          style={style}
          onEdit={() => setEditing(true)}
          title="Notities:"
          value={value ? value : "-"}
          fullWidth
        />
      ) : (
        <View style={styles.container}>
          <AppInput
            style={styles.input}
            onBlur={() => {
              setEditing(false);
              editStep(id, "notes", text);
            }}
            value={text}
            multiline
            onChangeText={(text) => setText(text)}
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
