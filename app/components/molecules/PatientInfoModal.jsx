import React, { useEffect, useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";
import Header from "./../atoms/Header";
import Separator from "../atoms/Separator";
import AppInput from "./../atoms/AppInput";
import { usePatient } from "../../contexts/patientContext";
import SmallButton from "./SmallButton";

function PatientInfoModal({ visible, onClose }) {
  const { patientNumber, setPatientNumber } = usePatient();
  const [inputValue, setInputValue] = useState("");
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (patientNumber) {
      setInputValue(patientNumber.toString());
    }
  }, [patientNumber]);

  function handleClose() {
    if (inputValue.length < 1) {
      setShowError(true);
    }
    else {
      setPatientNumber(inputValue);
      onClose();
    }
  }

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={handleClose}
    >
      <TouchableWithoutFeedback onPress={handleClose}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <View>
              <Header bold>Voer patiëntinformatie in:</Header>
              <Separator style={styles.separator} />
              <Text style={{ color: colors.main }}>Patientnummer:</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <AppInput
                  keyboardType="number-pad"
                  style={{ height: 40, flex: 1 }}
                  onChangeText={(value) => setInputValue(value)}
                  value={inputValue}
                  onBlur={() => setInputValue(text)}
                  maxLength={7}
                />
                <SmallButton
                  style={styles.button}
                  onPress={handleClose}
                  iconName="check"
                />
              </View>
              {showError && <Text style={{ color: "red" }}>Voer eerst een patiëntnummer in</Text>}

            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "70%",
    width: "100%",
    marginTop: "auto",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "white",
    borderColor: colors.main,
    borderWidth: 1,
  },
  doneContainer: {
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    ...StyleSheet.absoluteFillObject,
  },
  separator: {
    marginVertical: 10,
  },
  button: {
    marginLeft: 8,
  },
});

export default PatientInfoModal;
