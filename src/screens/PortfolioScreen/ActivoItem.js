import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ActivoItem = ({
  data: {
    simbolo,
    cantidad,
    valorizado,
    ultimoPrecio,
    variacionDiaria,
    gananciaPorcentaje,
    gananciaDinero,
    ppc,
  },
}) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          height: 80,
          flexDirection: "row",
          backgroundColor:
            Number(gananciaPorcentaje) < 0
              ? "rgba(235,77,75,0.7)"
              : "rgba(106,176,76,0.7)",
          borderRadius: 10,
          alignItems: "center",
        }}
      >
        <View
          style={{
            flex: 1,
            alignSelf: "stretch",
            justifyContent: "center",
            marginLeft: 20,
          }}
        >
          <Text style={{ fontWeight: "bold", color: "black" }}>{simbolo}</Text>
          <Text style={{ color: "black" }}>Ult. Precio</Text>
          <Text style={{ color: "black" }}>PPC</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignSelf: "stretch",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontWeight: "bold", color: "black" }}>{cantidad}</Text>
          <Text style={{ color: "black" }}>{`$${ultimoPrecio.toFixed(
            2
          )}`}</Text>
          <Text style={{ color: "black" }}>{`$${ppc.toFixed(2)}`}</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignSelf: "stretch",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontWeight: "bold", color: "black" }}>Total</Text>
          <Text style={{ color: "black" }}>Var. Diaria</Text>
          <Text style={{ color: "black" }}>Gan-Perd:</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignSelf: "stretch",
            justifyContent: "center",
          }}
        >
          <Text
            style={{ fontWeight: "bold", color: "black" }}
          >{`$${valorizado.toFixed(2)}`}</Text>
          <Text style={{ color: "black" }}>{`${variacionDiaria}%`}</Text>
          <Text
            style={{ color: "black" }}
          >{`${gananciaPorcentaje}%$${gananciaDinero}`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default ActivoItem;
