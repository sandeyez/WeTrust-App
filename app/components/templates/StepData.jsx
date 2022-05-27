import React from "react";
import { View, StyleSheet } from "react-native";
import SmallText from "../atoms/SmallText";
import AppButton from "../atoms/AppButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";
import SmallButton from "./../molecules/SmallButton";

function StepData({
  style,
  editing,
  onEdit,
  onFinishEditing,
  EditComponent,
  title,
  value,
  fullWidth = false,
}) {
  return (
    <View style={[styles.container, style]}>
      <View>
        <SmallText bold>{title}</SmallText>
        <View style={{ width: fullWidth ? 250 : 100 }}>
          {editing ? <EditComponent /> : <SmallText>{value || "-"}</SmallText>}
        </View>
      </View>
      <SmallButton
        style={styles.button}
        onPress={editing ? onFinishEditing : onEdit}
        iconName={editing ? "check" : "pencil"}
      />
      {/* <AppButton style={styles.button} onPress={onEdit}>
        <MaterialCommunityIcons name="pencil" size={24} color="white" />
      </AppButton> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: colors.secondary,
    borderRadius: 8,
    padding: 5,
  },
});

export default StepData;
