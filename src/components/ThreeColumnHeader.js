import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ThreeColumnHeader = ({ firstTitle, secondTitle, thirdTitle }) => {
  return (
    <View style={styles.header}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={styles.text}>{firstTitle}</Text>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={styles.text}>{secondTitle}</Text>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
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
    backgroundColor: "#254f70",
    alignItems: "center",
    borderRadius: 3,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    color: "white",
    fontFamily: "SairaBold",
  },
});
