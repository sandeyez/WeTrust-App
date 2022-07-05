import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import colors from "../../config/colors";
import CardHeader from "../atoms/CardHeader";
import { FontAwesome, Feather } from "@expo/vector-icons";
import StepTime from "../molecules/StepTime";
import StepDate from "./../molecules/StepDate";
import StepNotes from "../molecules/StepNotes";
import steps from "../../config/steps";
import { useSteps } from "../../contexts/stepContext";

function StepCard({ style, id }) {
  const { steps: allSteps } = useSteps();
  const [expanded, setExpanded] = useState(false);

  const [datetime, setDatetime] = useState();
  const [notes, setNotes] = useState();

  useEffect(() => {
    setDatetime(allSteps[id].datetime);
    setNotes(allSteps[id].notes);
  }, [allSteps]);

  return (
    <View style={[styles.container, style]}>
      <TouchableWithoutFeedback onPress={() => setExpanded((e) => !e)}>
        <View style={styles.header}>
          <View style={styles.indexAndIcon}>
            <CardHeader bold={false} style={styles.index}>
              {id + 1}.
            </CardHeader>
            <FontAwesome name="hospital-o" size={24} color="black" />
          </View>

          <CardHeader style={styles.stepName}>{steps[id]}</CardHeader>

          <Feather
            name={expanded ? "chevron-up" : "chevron-down"}
            size={24}
            color={colors.main}
          />
        </View>
      </TouchableWithoutFeedback>
      {expanded && (
        <View style={styles.body}>
          <View style={styles.dateTimeButtons}>
            <StepTime style={styles.stepData} value={datetime} id={id} />
            <StepDate style={styles.stepData} value={datetime} id={id} />
          </View>
          <StepNotes value={notes} id={id} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { borderRadius: 8, overflow: "hidden" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 8,
  },
  index: {
    marginRight: 4,
    width: 30,
  },
  indexAndIcon: {
    flexDirection: "row",
    marginRight: 12,
  },
  stepName: {
    flex: 1,
  },
  body: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: "white",
  },
  stepData: {
    width: "45%",
  },
  dateTimeButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});

export default StepCard;
