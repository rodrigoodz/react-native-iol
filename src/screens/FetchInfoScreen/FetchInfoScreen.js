import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";

import { Context as FetchContext } from "../../context/FetchContext";

import GoBackButton from "../../components/GoBackButton";
import MonthsInfo from "./MonthsInfo";
import Title from "../../components/Title";
import GradientContainer from "../../components/GradientContainer";

const FetchInfoScreen = ({ navigation }) => {
  const {
    state: { MonthCounter },
  } = useContext(FetchContext);

  return (
    <View style={styles.viewContainer}>
      <GradientContainer
        firstColor="#2b5a7f"
        secondColor="#193952"
        padding={10}
        borderBottomLeftRadius={30}
        borderBottomRightRadius={30}
        marginBottom={40}
      >
        <Title textTitle="Detalle Solicitudes" />

        <MonthsInfo MonthCounter={MonthCounter} />
      </GradientContainer>
      <GoBackButton navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: { flex: 1, backgroundColor: "#131e31" },
});

export default FetchInfoScreen;
