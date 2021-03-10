import React from "react";
import { StyleSheet, Text } from "react-native";

import GradientContainer from "./GradientContainer";
import TwoColumnHeader from "./TwoColumnHeader";
import TwoColumnItem from "./TwoColumnItem";

const TopPrices = ({ ticker }) => {
  if (ticker.puntas === null || ticker.puntas.length == 0) {
    return (
      <Text style={{ color: "rgba(255,0,0,.8)", marginHorizontal: 15 }}>
        Actualmente no hay informacion de las puntas de compra y venta
      </Text>
    );
  }

  return (
    <GradientContainer
      firstColor="#132b38"
      secondColor="#050f17"
      padding={10}
      borderRadius={20}
      marginHorizontal={15}
      marginBottom={10}
    >
      <Text
        style={{
          color: "white",
          alignSelf: "center",
          fontFamily: "SairaSemiBold",
          fontSize: 18,
        }}
      >
        Caja de Puntas
      </Text>
      <TwoColumnHeader firstTitle="Compra" secondTitle="Venta" />
      {!ticker.puntas.length ? (
        <TwoColumnItem
          firstText={`${
            ticker.puntas.cantidadCompra
          } x $${ticker.puntas.precioCompra.toFixed(2)}`}
          secondText={`${
            ticker.puntas.cantidadVenta
          } x $${ticker.puntas.precioVenta.toFixed(2)}`}
          alignFirstColumn="center"
          alignSecondColumn="center"
        />
      ) : (
        ticker.puntas.map((punta, idx) => {
          return (
            <TwoColumnItem
              firstText={`${
                punta.cantidadCompra
              } x $${punta.precioCompra.toFixed(2)}`}
              secondText={`${
                punta.cantidadVenta
              } x $${punta.precioVenta.toFixed(2)}`}
              alignFirstColumn="center"
              alignSecondColumn="center"
              key={idx}
            />
          );
        })
      )}
    </GradientContainer>
  );
};

export default TopPrices;

const styles = StyleSheet.create({});
