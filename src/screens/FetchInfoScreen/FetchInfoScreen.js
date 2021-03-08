import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FetchInfoScreen = ({ navigation }) => {
  return (
    <View style={styles.viewContainer}>
      <Text>FetchInfoScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: { flex: 1, backgroundColor: "#131e31" },
});

export default FetchInfoScreen;
