import React from "react";
import { StyleSheet, View } from "react-native";

import GradientContainer from "../../components/GradientContainer";
import TwoColumnItem from "../../components/TwoColumnItem";

const InfoTicker = ({
  mercado,
  moneda,
  cantidadOperaciones,
  fecha,
  apertura,
  ultimoPrecio,
  maximo,
  minimo,
  variacionPorcentual,
  volumen,
}) => {
  return (
    <View style={styles.container}>
      <GradientContainer
        firstColor="#132b38"
        secondColor="#050f17"
        padding={10}
        borderRadius={20}
        marginHorizontal={15}
      >
        <TwoColumnItem
          firstText="Mercado"
          secondText={`${mercado.toUpperCase()}`}
        />
        <TwoColumnItem
          firstText="Moneda"
          secondText={`${moneda.toUpperCase()}`}
        />
        <TwoColumnItem
          firstText="Cant. de Operaciones"
          secondText={`${cantidadOperaciones}`}
        />
        <TwoColumnItem
          firstText="Ultimo Precio"
          secondText={`${moneda.toUpperCase()} ${ultimoPrecio.toFixed(2)}`}
        />
        <TwoColumnItem
          firstText="Apertura"
          secondText={`${moneda.toUpperCase()} ${apertura.toFixed(2)}`}
        />
        <TwoColumnItem
          firstText="Máximo"
          secondText={`${moneda.toUpperCase()} ${maximo.toFixed(2)}`}
        />
        <TwoColumnItem
          firstText="Mínimo"
          secondText={`${moneda.toUpperCase()} ${minimo.toFixed(2)}`}
        />
        <TwoColumnItem
          firstText="Variacion Porcentual"
          secondText={`${variacionPorcentual} %`}
        />
        <TwoColumnItem firstText="Volumen" secondText={`${volumen} M`} />
        <TwoColumnItem
          firstText="Fecha"
          secondText={`${fecha
            .replace(/T.*/, "")
            .split("-")
            .reverse()
            .join("-")} ${fecha.replace(
            /^[^:]*([0-2]\d:[0-5]\d:\d\d).*$/,
            "$1"
          )}hs`}
        />
      </GradientContainer>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  row: { justifyContent: "space-between", flexDirection: "row" },
});

export default InfoTicker;
