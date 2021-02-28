import React from "react";
import { StyleSheet, Text, View } from "react-native";

const InfoOperation = ({
  simbolo,
  tipo,
  fechaAlta,
  validez,
  precio,
  cantidad,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text>Simbolo</Text>
        <Text>{simbolo}</Text>
      </View>
      <View style={styles.row}>
        <Text>Tipo de Operación</Text>
        <Text>{tipo.toUpperCase()}</Text>
      </View>
      <View style={styles.row}>
        <Text>Cantidad/Monto</Text>
        <Text>{cantidad}</Text>
      </View>
      <View style={styles.row}>
        <Text>Precio</Text>
        <Text>${precio}</Text>
      </View>
      <View style={styles.row}>
        <Text>Fecha Alta</Text>
        <Text>
          {fechaAlta.replace(/T.*/, "").split("-").reverse().join("-") + " "}
          {fechaAlta.replace(/^[^:]*([0-2]\d:[0-5]\d:\d\d).*$/, "$1") + "hs"}
        </Text>
      </View>
      <View style={styles.row}>
        <Text>Validez:</Text>
        <Text>
          {validez.replace(/T.*/, "").split("-").reverse().join("-") + " "}
          {validez.replace(/^[^:]*([0-2]\d:[0-5]\d:\d\d).*$/, "$1") + "hs"}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(235,255,255,0.8)",
    padding: 10,
    marginTop: 15,
    borderRadius: 10,
  },
  row: { justifyContent: "space-between", flexDirection: "row" },
});

export default InfoOperation;
