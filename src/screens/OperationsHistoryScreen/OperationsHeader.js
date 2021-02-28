import React from "react";
import { Text, View, StyleSheet } from "react-native";

const OperationsHeader = () => {
  return (
    <View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.text}>Nro. de Trans</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.text}>Fecha Orden</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.text}>Tipo</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.text}>Simbolo</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.text}>Estado</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    backgroundColor: "#686DE0",
    borderWidth: 2,
    marginTop: 15,
  },
  column: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: { fontWeight: "bold", color: "black" },
});

export default OperationsHeader;
