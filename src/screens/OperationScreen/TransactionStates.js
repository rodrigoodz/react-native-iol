import React from "react";
import { StyleSheet, Text, View } from "react-native";

import GradientContainer from "../../components/GradientContainer";
import TwoColumnHeader from "../../components/TwoColumnHeader";
import TwoColumnItem from "../../components/TwoColumnItem";

//TODO  podria reutilizar transactionitem y hacer que el header salga de poner mayor tamaño y fontweight:bold
const TransactionStates = ({ estados }) => {
  return (
    <View>
      <Text
        style={{
          color: "white",
          alignSelf: "center",
          fontFamily: "SairaSemiBold",
          fontSize: 18,
        }}
      >
        Estados de Transacción
      </Text>
      <GradientContainer
        firstColor="#132b38"
        secondColor="#050f17"
        padding={10}
        borderRadius={20}
        marginHorizontal={15}
      >
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
      </GradientContainer>
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
