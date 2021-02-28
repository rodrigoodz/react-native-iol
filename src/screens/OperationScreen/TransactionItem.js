import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TransactionItem = ({ title, date }) => {
  return (
    <View style={styles.row}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={styles.text}>
          {date.replace(/T.*/, "").split("-").reverse().join("-") + " "}
          {date.replace(/^[^:]*([0-2]\d:[0-5]\d:\d\d).*$/, "$1") + "hs"}
        </Text>
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

export default TransactionItem;
