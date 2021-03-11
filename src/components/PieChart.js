import React from "react";
import { StyleSheet, View } from "react-native";
import { VictoryPie } from "victory-native";

const PieChart = ({ activos }) => {
  return (
    <View>
      <VictoryPie
        data={activos}
        colorScale="blue"
        height={300}
        style={{
          data: {
            fillOpacity: 0.9,
            stroke: "#fff",
            strokeWidth: 1,
          },
          labels: {
            fontSize: 12,
            fill: "white",
          },
        }}
      />
    </View>
  );
};

export default PieChart;

const styles = StyleSheet.create({});
