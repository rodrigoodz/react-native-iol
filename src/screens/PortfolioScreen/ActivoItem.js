import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ActivoItem = ({
  simbolo = null,
  cantidad = null,
  valorizado = null,
  ultimoPrecio = null,
  variacionDiaria = null,
  gananciaPorcentaje = null,
  gananciaDinero = null,
  ppc = null,
}) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          height: 80,
          padding: 10,
          flexDirection: "row",
          backgroundColor:
            Number(gananciaPorcentaje) < 0
              ? "rgba(235,77,75,0.7)"
              : "rgba(106,176,76,0.7)",
          borderRadius: 10,
          alignItems: "center",
          marginVertical: 2,
        }}
      >
        <View
          style={{
            flex: 1,
            alignSelf: "stretch",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Text style={styles.boldTitle}>{simbolo}</Text>
          <Text style={styles.text}>Ult. Precio</Text>
          <Text style={styles.text}>PPC</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignSelf: "stretch",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Text style={styles.boldTitle}>{cantidad}</Text>
          <Text style={styles.text}>{`$${ultimoPrecio.toFixed(2)}`}</Text>
          <Text style={styles.text}>{`$${ppc.toFixed(2)}`}</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignSelf: "stretch",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Text style={styles.boldTitle}>Total</Text>
          <Text style={styles.text}>Var. Diaria</Text>
          <Text style={styles.text}>Gan-Perd:</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignSelf: "stretch",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <Text style={styles.boldTitle}>{`$${valorizado.toFixed(2)}`}</Text>
          <Text style={styles.text}>{`${variacionDiaria}%`}</Text>
          <Text style={styles.text}>{`${gananciaPorcentaje}%`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boldTitle: { color: "black", fontFamily: "SairaBold" },
  text: { color: "black", fontFamily: "SairaLight" },
});

export default ActivoItem;
