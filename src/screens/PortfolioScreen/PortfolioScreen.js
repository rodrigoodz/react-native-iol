import React, { useContext } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Text } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";

import { Context as AuthContext } from "../../context/AuthContext";
import { useFetch } from "../../hooks/useFetch";

import ActivoItem from "./ActivoItem";
import GradientContainer from "../../components/GradientContainer";
import LoadingComponent from "../../components/LoadingComponent";
import Title from "../../components/Title";

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
      <View style={{ flex: 1, backgroundColor: "#131e31" }}>
        <GradientContainer
          firstColor="#2b5a7f"
          secondColor="#193952"
          padding={10}
          borderBottomLeftRadius={30}
          borderBottomRightRadius={30}
          marginBottom={20}
        >
          <Title textTitle="Portafolio Argentina" />
        </GradientContainer>
        <Text
          style={{
            color: "rgba(235,255,255,0.8)",
            alignSelf: "center",
            fontFamily: "SairaBold",
            fontSize: 24,
          }}
        >
          Activos
        </Text>
        <LinearGradient
          colors={["#132b38", "#050f17"]}
          style={{
            padding: 10,
            borderRadius: 20,
            marginHorizontal: 15,
            marginBottom: 5,
            flex: 1,
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
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
          </ScrollView>
        </LinearGradient>
      </View>
    );
  } else {
    return <LoadingComponent />;
  }
};

const styles = StyleSheet.create({});

export default PortfolioScreen;
