import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CommissionsHeader = () => {
  return (
    <View style={styles.header}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={styles.text}>Arancel</Text>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={styles.text}>Impuesto Neto</Text>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={styles.text}>Impuesto IVA</Text>
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
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default CommissionsHeader;
