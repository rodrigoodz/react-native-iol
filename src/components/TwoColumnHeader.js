import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TwoColumnHeader = ({ firstTitle, secondTitle }) => {
  return (
    <View style={styles.header}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={styles.text}>{firstTitle}</Text>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={styles.text}>{secondTitle}</Text>
      </View>
    </View>
  );
};

export default TwoColumnHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    color: "black",
    fontFamily: "SairaBold",
  },
});
