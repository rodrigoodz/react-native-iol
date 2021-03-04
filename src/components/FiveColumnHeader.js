import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FiveColumnHeader = ({
  firstTitle,
  secondTitle,
  thirdTitle,
  fourthTitle,
  fifthTitle,
}) => {
  return (
    <View style={styles.header}>
      <View style={{ flex: 1, alignItems: "flex-start" }}>
        <Text style={styles.text}>{firstTitle}</Text>
      </View>
      <View style={{ flex: 1, alignItems: "flex-start" }}>
        <Text style={styles.text}>{secondTitle}</Text>
      </View>
      <View style={{ flex: 1, alignItems: "flex-start" }}>
        <Text style={styles.text}>{thirdTitle}</Text>
      </View>
      <View style={{ flex: 1, alignItems: "flex-start" }}>
        <Text style={styles.text}>{fourthTitle}</Text>
      </View>
      <View style={{ flex: 1, alignItems: "flex-start" }}>
        <Text style={styles.text}>{fifthTitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#254f70",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    color: "white",
    fontFamily: "SairaBold",
  },
});

export default FiveColumnHeader;
