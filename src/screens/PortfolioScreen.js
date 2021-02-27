import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";

const PortfolioScreen = () => {
  return (
    <View style={{ flex: 1, padding: 10, backgroundColor: "#4834D4" }}>
      <Title textTitle="Portafolio Argentina" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default PortfolioScreen;
