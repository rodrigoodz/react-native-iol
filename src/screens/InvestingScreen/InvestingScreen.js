import React from "react";
import { StyleSheet, View } from "react-native";

import GradientContainer from "../../components/GradientContainer";
import Title from "../../components/Title";
import Button from "./Button";

const InvestingScreen = () => {
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
        <Title textTitle="Operar" />
      </GradientContainer>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
        }}
      >
        <Button text="Comprar" />
        <Button text="Vender" />
        <Button text="Rescatar" />
        <Button text="Suscribir" />
      </View>
    </View>
  );
};

export default InvestingScreen;

const styles = StyleSheet.create({});
