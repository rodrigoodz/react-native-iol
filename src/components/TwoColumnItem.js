import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TwoColumnItem = ({ firstText, secondText }) => {
  return (
    <View style={styles.row}>
      <View style={{ flex: 1, alignItems: "flex-start" }}>
        <Text style={styles.text}>{firstText}</Text>
      </View>
      <View style={{ flex: 1, alignItems: "flex-end" }}>
        <Text style={styles.text}>{secondText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 14,
  },
});

export default TwoColumnItem;
