import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import StepCard from "../organisms/StepCard";
import Header from "../atoms/Header";
import { useSteps } from "../../contexts/stepContext";

function PreviousSteps(props) {
  const { steps } = useSteps();

  return (
    <View style={styles.container}>
      <Header bold>Vorige stappen</Header>

      <FlatList
        data={steps}
        keyExtractor={(step) => step.id}
        renderItem={({ item, index }) => (
          <StepCard
            id={steps.length - index - 1}
            style={{ marginVertical: 6 }}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default PreviousSteps;
