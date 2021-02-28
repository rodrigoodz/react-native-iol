import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const OperationsItems = ({ data }) => {
  const { date, estado, nro, simbolo, tipo } = data;
  return (
    <View style={styles.row}>
      <View style={styles.oddColumn}>
        <Text style={styles.text}>{nro}</Text>
      </View>
      <View style={styles.evenColumn}>
        <Text style={styles.text}>
          {date.getDate()}/{date.getMonth()}/{date.getFullYear()}
        </Text>
      </View>
      <View style={styles.oddColumn}>
        <Text style={styles.text}>{tipo}</Text>
      </View>
      <View style={styles.evenColumn}>
        <Text style={styles.text}>{simbolo}</Text>
      </View>
      <View style={styles.oddColumn}>
        <Text style={styles.text}>{estado}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    backgroundColor: "#686DE0",
    height: 50,
    borderWidth: 1,
  },
  oddColumn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(19,15,64,0.1)",
  },
  evenColumn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: { fontWeight: "bold", color: "black", fontSize: 10 },
});

export default OperationsItems;
