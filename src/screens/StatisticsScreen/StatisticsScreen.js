import React from "react";
import { StyleSheet, Text, View } from "react-native";
import GoBackButton from "../../components/GoBackButton";
import ThreeColumnHeader from "../../components/ThreeColumnHeader";
import ThreeColumnItem from "../../components/ThreeColumnItem";
import Title from "../../components/Title";

const StatisticsScreen = ({ route, navigation }) => {
  const {
    statistics: [anterior, actual],
  } = route.params;
  console.log("anterior", anterior);
  console.log("actual", actual);

  return (
    <View style={{ flex: 1, padding: 10, backgroundColor: "#4834D4" }}>
      <Title textTitle="Estadisticas" />
      <View style={styles.container}>
        <ThreeColumnHeader
          firstTitle=""
          secondTitle="Mes Anterior"
          thirdTitle="Mes Actual"
        />
        <ThreeColumnItem
          firstText="Cantidad:"
          secondText={`${anterior.cantidad}`}
          thirdText={`${actual.cantidad}`}
        />
        <ThreeColumnItem
          firstText="Vol. Operado:"
          secondText={`AR$ ${anterior.volumen.toFixed(2)}`}
          thirdText={`AR$ ${actual.volumen.toFixed(2)}`}
        />
      </View>
      <GoBackButton navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(235,255,255,0.8)",
    padding: 10,
    borderRadius: 10,
    marginTop: 15,
  },
});

export default StatisticsScreen;
