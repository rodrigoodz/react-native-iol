import React from "react";
import { StyleSheet, View } from "react-native";

import GradientContainer from "../components/GradientContainer";
import Title from "../components/Title";

const BuySellScreen = () => {
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
    </View>
  );
};

export default BuySellScreen;

const styles = StyleSheet.create({});
