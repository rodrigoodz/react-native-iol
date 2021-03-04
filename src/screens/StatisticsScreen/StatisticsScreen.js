import React from "react";
import { View } from "react-native";
import GoBackButton from "../../components/GoBackButton";
import GradientContainer from "../../components/GradientContainer";
import ThreeColumnHeader from "../../components/ThreeColumnHeader";
import ThreeColumnItem from "../../components/ThreeColumnItem";
import Title from "../../components/Title";

const StatisticsScreen = ({ route, navigation }) => {
  const {
    statistics: [anterior, actual],
  } = route.params;

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
        <Title textTitle="Estadisticas" />
      </GradientContainer>

      <GradientContainer
        firstColor="#132b38"
        secondColor="#050f17"
        padding={10}
        borderRadius={20}
        marginHorizontal={15}
      >
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
      </GradientContainer>
      <GoBackButton navigation={navigation} />
    </View>
  );
};

export default StatisticsScreen;
