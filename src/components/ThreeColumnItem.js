import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ThreeColumnItem = ({ firstText, secondText, thirdText }) => {
  return (
    <View style={styles.row}>
      <View style={{ flex: 1, alignItems: "flex-start", paddingLeft: 10 }}>
        <Text style={styles.text}>{firstText}</Text>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={styles.text}>{secondText}</Text>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={styles.text}>{thirdText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: { color: "white", fontFamily: "SairaThin" },
});

export default ThreeColumnItem;
