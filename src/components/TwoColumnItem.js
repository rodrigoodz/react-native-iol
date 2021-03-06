import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TwoColumnItem = ({
  firstText,
  secondText,
  alignFirstColumn = "flex-start",
  alignSecondColumn = "flex-end",
}) => {
  return (
    <View style={styles.row}>
      <View style={{ flex: 1, alignItems: alignFirstColumn }}>
        <Text style={styles.text}>{firstText}</Text>
      </View>
      <View style={{ flex: 1, alignItems: alignSecondColumn }}>
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
    color: "white",
    fontFamily: "SairaThin",
  },
});

export default TwoColumnItem;
