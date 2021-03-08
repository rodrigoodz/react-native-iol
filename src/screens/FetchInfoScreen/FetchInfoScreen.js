import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import GoBackButton from "../../components/GoBackButton";
import GradientContainer from "../../components/GradientContainer";
import Title from "../../components/Title";
import TwoColumnHeader from "../../components/TwoColumnHeader";
import TwoColumnItem from "../../components/TwoColumnItem";
import { Context as FetchContext } from "../../context/FetchContext";

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
        <GradientContainer
          firstColor="#132b38"
          secondColor="#050f17"
          padding={10}
          borderRadius={20}
          marginHorizontal={15}
        >
          <TwoColumnHeader firstTitle="Mes" secondTitle="Cant. Solicitudes" />
          <TwoColumnItem
            firstText="Enero"
            secondText={`${MonthCounter.jan}`}
            alignFirstColumn="center"
            alignSecondColumn="center"
          />
        </GradientContainer>
      </GradientContainer>
      <GoBackButton navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: { flex: 1, backgroundColor: "#131e31" },
});

export default FetchInfoScreen;
