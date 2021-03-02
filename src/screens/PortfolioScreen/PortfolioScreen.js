import React, { useContext } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { Text } from "react-native-elements";
import ActivoItem from "./ActivoItem";
import Title from "../../components/Title";
import { useFetch } from "../../hooks/useFetch";
import { Context as AuthContext } from "../../context/AuthContext";

const PortfolioScreen = () => {
  const {
    state: { access_token },
  } = useContext(AuthContext);

  const { data, error } = useFetch(
    "https://api.invertironline.com/api/v2/portafolio/{{pais}}",
    access_token,
    "GET"
  );
  // console.log("data account", data);

  // const data = {
  //   pais: "argentina",
  //   activos: [
  //     {
  //       cantidad: 5.0,
  //       comprometido: 0.0,
  //       puntosVariacion: -0.8,
  //       variacionDiaria: -0.69,
  //       ultimoPrecio: 114.5,
  //       ppc: 126.36,
  //       gananciaPorcentaje: -9.38,
  //       gananciaDinero: -59.3,
  //       valorizado: 572.5,
  //       titulo: {
  //         simbolo: "GGAL",
  //         descripcion: "Grupo Financiero Galicia S.A",
  //         pais: "argentina",
  //         mercado: "bcba",
  //         tipo: "ACCIONES",
  //         plazo: "t0",
  //         moneda: "peso_Argentino",
  //       },
  //     },
  //   ],
  // };

  if (data) {
    return (
      <View style={{ flex: 1, padding: 10, backgroundColor: "#4834D4" }}>
        <Title textTitle="Portafolio Argentina" />
        <Text h3 style={{ color: "rgba(235,255,255,0.8)" }}>
          Activos
        </Text>
        {/* <ActivoItem /> */}
        {data.activos.map((activo) => {
          const {
            titulo: { simbolo },
            cantidad,
            valorizado,
            ultimoPrecio,
            variacionDiaria,
            gananciaPorcentaje,
            gananciaDinero,
            ppc,
          } = activo;
          return (
            <ActivoItem
              data={{
                simbolo,
                cantidad,
                valorizado,
                ultimoPrecio,
                variacionDiaria,
                gananciaPorcentaje,
                gananciaDinero,
                ppc,
              }}
              key={simbolo}
            />
          );
        })}
      </View>
    );
  } else {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#4834D4",
        }}
      >
        <ActivityIndicator size={60} color="white" />
      </View>
    );
  }
};

const styles = StyleSheet.create({});

export default PortfolioScreen;
