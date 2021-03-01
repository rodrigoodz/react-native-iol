import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TwoColumnHeader from "../../components/TwoColumnHeader";
import TwoColumnItem from "../../components/TwoColumnItem";

//TODO  podria reutilizar transactionitem y hacer que el header salga de poner mayor tamaño y fontweight:bold
const TransactionStates = ({ estados }) => {
  return (
    <View>
      <Text style={{ color: "white", alignSelf: "center", marginTop: 30 }}>
        Estados de Transacción
      </Text>
      <View style={styles.container}>
        <TwoColumnHeader firstTitle="Detalle" secondTitle="Fecha" />

        {estados.map((estado) => {
          return (
            <TwoColumnItem
              firstText={`${estado.detalle}`}
              secondText={`${estado.fecha
                .replace(/T.*/, "")
                .split("-")
                .reverse()
                .join("-")} ${estado.fecha.replace(
                /^[^:]*([0-2]\d:[0-5]\d:\d\d).*$/,
                "$1"
              )}hs`}
              key={estado.fecha}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(235,255,255,0.8)",
    padding: 10,
    borderRadius: 10,
  },
});

export default TransactionStates;
