import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FourColumnHeader = ({
  firstTitle,
  secondTitle,
  thirdTitle,
  fourthTitle,
}) => {
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
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={styles.text}>{fourthTitle}</Text>
      </View>
    </View>
  );
};

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
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default FourColumnHeader;
