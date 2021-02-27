import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import ScreenInicio from "./src/screens/ScreenInicio/ScreenInicio";
import ScreenLogin from "./src/screens/ScreenLogin";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScreenLogin /> */}
      <ScreenInicio />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4834D4",
  },
});
