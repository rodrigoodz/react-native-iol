import React from "react";
import { StyleSheet, Text, View } from "react-native";
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
