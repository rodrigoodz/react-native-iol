import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ThreeColumnHeader = ({ firstTitle, secondTitle, thirdTitle }) => {
  return (
    <View style={styles.header}>
      <View style={styles.column}>
        <Text style={styles.text}>{firstTitle}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.text}>{secondTitle}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.text}>{thirdTitle}</Text>
      </View>
    </View>
  );
};

export default ThreeColumnHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 5,
  },
  column: { flex: 1, alignItems: "center" },
  text: {
    fontSize: 16,
    color: "black",
    fontFamily: "SairaBold",
  },
});
