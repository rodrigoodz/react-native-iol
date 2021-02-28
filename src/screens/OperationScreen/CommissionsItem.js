import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CommissionsItem = ({ iva, neto, tipo }) => {
  return (
    <View style={styles.row}>
      <View style={{ flex: 1, alignItems: "flex-start", paddingLeft: 10 }}>
        <Text style={styles.text}>{tipo}</Text>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={styles.text}>${neto}</Text>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={styles.text}>${iva}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default CommissionsItem;
