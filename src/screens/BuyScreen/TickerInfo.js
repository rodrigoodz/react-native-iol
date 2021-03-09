import React from "react";
import { StyleSheet } from "react-native";

import GradientContainer from "../../components/GradientContainer";
import TwoColumnItem from "../../components/TwoColumnItem";

const TickerInfo = ({ ticker }) => {
  return (
    <GradientContainer
      firstColor="#132b38"
      secondColor="#050f17"
      padding={10}
      borderRadius={20}
      marginHorizontal={15}
    >
      <TwoColumnItem
        firstText="Fecha"
        secondText={`${ticker.fechaHora
          .replace(/T.*/, "")
          .split("-")
          .reverse()
          .join("-")} ${ticker.fechaHora.replace(
          /^[^:]*([0-2]\d:[0-5]\d:\d\d).*$/,
          "$1"
        )}hs`}
      />
      <TwoColumnItem
        firstText="Variacion"
        secondText={`${ticker.variacion} %`}
      />
      <TwoColumnItem firstText="Apertura" secondText={`${ticker.apertura} $`} />
      <TwoColumnItem
        firstText="Ultimo Precio"
        secondText={`${ticker.ultimoPrecio} $`}
      />
      <TwoColumnItem firstText="Moneda" secondText={`${ticker.moneda}`} />
    </GradientContainer>
  );
};

export default TickerInfo;

const styles = StyleSheet.create({});
