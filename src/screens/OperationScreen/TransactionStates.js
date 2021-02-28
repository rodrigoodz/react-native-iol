import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TransactionHeader from "./TransactionHeader";
import TransactionItem from "./TransactionItem";

//TODO  podria reutilizar transactionitem y hacer que el header salga de poner mayor tamaño y fontweight:bold
const TransactionStates = ({ estados }) => {
  return (
    <View>
      <Text style={{ color: "white", alignSelf: "center", marginTop: 30 }}>
        Estados de Transacción
      </Text>
      <View style={styles.container}>
        <TransactionHeader />

        {estados.map((estado) => {
          return (
            <TransactionItem
              title={estado.detalle}
              date={estado.fecha}
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
