import React from "react";
import { StyleSheet, View } from "react-native";
import GradientContainer from "../../components/GradientContainer";

import TwoColumnHeader from "../../components/TwoColumnHeader";
import TwoColumnItem from "../../components/TwoColumnItem";

const MonthsInfo = ({ MonthCounter }) => {
  return (
    <View style={styles.container}>
      <GradientContainer
        firstColor="#132b38"
        secondColor="#050f17"
        padding={10}
        borderRadius={20}
        marginHorizontal={15}
      >
        <TwoColumnHeader firstTitle="Mes" secondTitle="Cant. Solicitudes" />
        {MonthCounter.map((month) => {
          return (
            <TwoColumnItem
              firstText={`${month.name}`}
              secondText={`${month.count}`}
              alignFirstColumn="center"
              alignSecondColumn="center"
              key={month.name}
            />
          );
        })}
      </GradientContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 15 },
});

export default MonthsInfo;
