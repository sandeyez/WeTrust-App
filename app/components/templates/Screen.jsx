import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, Platform, View } from "react-native";
import colors from "../../config/colors";

function Screen({ style, children }) {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={{ flex: 1, paddingHorizontal: 28 }}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
    paddingBottom: 20,
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default Screen;
