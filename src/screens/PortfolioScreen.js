import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import ActivoItem from "../components/ActivoItem";
import Title from "../components/Title";

const PortfolioScreen = () => {
  return (
    <View style={{ flex: 1, padding: 10, backgroundColor: "#4834D4" }}>
      <Title textTitle="Portafolio Argentina" />
      <Text h3 style={{ color: "rgba(235,255,255,0.8)" }}>
        Activos
      </Text>

      <ActivoItem />
    </View>
  );
};

const styles = StyleSheet.create({});

export default PortfolioScreen;
