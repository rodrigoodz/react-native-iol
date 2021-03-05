import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";

const LoadingComponent = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={60} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#131e31",
  },
});

export default LoadingComponent;
