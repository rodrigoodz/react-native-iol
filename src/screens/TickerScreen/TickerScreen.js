import React from "react";
import { StyleSheet, View } from "react-native";
import GoBackButton from "../../components/GoBackButton";
import GradientContainer from "../../components/GradientContainer";
import Title from "../../components/Title";

import InfoTicker from "./InfoTicker";
import TopPrices from "./TopPrices";

const TickerScreen = ({ route, navigation }) => {
  const { ticker } = route.params;

  return (
    <View style={{ flex: 1, backgroundColor: "#131e31" }}>
      <GradientContainer
        firstColor="#2b5a7f"
        secondColor="#193952"
        padding={10}
        borderBottomLeftRadius={30}
        borderBottomRightRadius={30}
        marginBottom={40}
      >
        <Title textTitle={`${ticker.simbolo}`} />
        <InfoTicker
          mercado={ticker.mercado}
          moneda={ticker.moneda}
          cantidadOperaciones={ticker.cantidadOperaciones}
          fecha={ticker.fecha}
          apertura={ticker.apertura}
          ultimoPrecio={ticker.ultimoPrecio}
          maximo={ticker.maximo}
          minimo={ticker.minimo}
          variacionPorcentual={ticker.variacionPorcentual}
          volumen={ticker.volumen}
        />
      </GradientContainer>
      <TopPrices ticker={ticker} />
      <GoBackButton navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TickerScreen;
