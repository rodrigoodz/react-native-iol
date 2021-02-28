import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TransactionHeader = () => {
  return (
    <View style={styles.header}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={styles.text}>Detalle</Text>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={styles.text}>Fecha</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default TransactionHeader;
