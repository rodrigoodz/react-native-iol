import React from "react";
import { StyleSheet, View } from "react-native";
import {
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
  VictoryLine,
} from "victory-native";

const Chart = ({ data, asset }) => {
  return (
    <View style={styles.container}>
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={{ x: 2 }}
        scale={{ x: "time" }}
      >
        <VictoryAxis
          dependentAxis
          style={{
            axis: { stroke: "#ccc" },
            tickLabels: { padding: 10 },
            axisLabel: { padding: 2 },
            grid: { stroke: "rgba(255,255,255,.1)" },
          }}
          label="Precio"
        />
        <VictoryAxis
          tickFormat={(t) => `${t.getDate()}/${t.getMonth() + 1}`}
          style={{
            axis: { stroke: "#ccc" },
            tickLabels: { angle: 0, padding: 2 },
            grid: { stroke: "rgba(255,255,255,.1)" },
          }}
        />
        <VictoryLine
          style={{
            data: { stroke: "#0091c8" },
            parent: { border: "1px solid #ccc" },
          }}
          data={data.map((d) => ({
            x: new Date(d.fechaHora),
            y: d.ultimoPrecio,
          }))}
        />
      </VictoryChart>
    </View>
  );
};

export default Chart;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    height: 300,
    borderRadius: 5,
    marginHorizontal: 5,
    borderWidth: 1,
  },
});
