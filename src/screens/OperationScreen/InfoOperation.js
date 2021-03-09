import React from "react";
import { StyleSheet, View } from "react-native";

import GradientContainer from "../../components/GradientContainer";
import TwoColumnItem from "../../components/TwoColumnItem";

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
      <GradientContainer
        firstColor="#132b38"
        secondColor="#050f17"
        padding={10}
        borderRadius={20}
        marginHorizontal={5}
      >
        <TwoColumnItem firstText="Simbolo" secondText={`${simbolo}`} />
        <TwoColumnItem
          firstText="Tipo de Operación"
          secondText={`${tipo.toUpperCase()}`}
        />
        <TwoColumnItem firstText="Cantidad/Monto" secondText={`${cantidad}`} />
        <TwoColumnItem firstText="Precio" secondText={`${precio}`} />
        <TwoColumnItem
          firstText="Fecha Alta"
          secondText={`${fechaAlta
            .replace(/T.*/, "")
            .split("-")
            .reverse()
            .join("-")} ${fechaAlta.replace(
            /^[^:]*([0-2]\d:[0-5]\d:\d\d).*$/,
            "$1"
          )}hs`}
        />
        <TwoColumnItem
          firstText="Validez"
          secondText={`${validez
            .replace(/T.*/, "")
            .split("-")
            .reverse()
            .join("-")} ${validez.replace(
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

export default InfoOperation;
