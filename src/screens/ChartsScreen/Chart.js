import React from "react";
import { StyleSheet, View } from "react-native";
import HighchartsReactNative from "@highcharts/highcharts-react-native";

const Chart = ({ data, asset }) => {
  return (
    <View style={styles.container}>
      <HighchartsReactNative
        styles={styles.container}
        options={{
          title: {
            text: `${asset}`,
          },
          yAxis: {
            title: {
              text: "Precio",
            },
            labels: {
              format: "{value:,.0f}",
            },
            gridLineColor: "rgba(255,255,255,.2)",
          },
          chart: {
            backgroundColor: "#111112",
          },
          tooltip: {
            crosshairs: [true, true],
            formatter: function () {
              return (
                "Fecha: " +
                this.point.fecha +
                "<br/>" +
                "Cierre: " +
                this.point.y +
                "$" +
                "<br/>" +
                "Apertura " +
                this.point.apertura +
                "$" +
                "<br/>" +
                "Maximo " +
                this.point.maximo +
                "$" +
                "<br/>" +
                "Minimo " +
                this.point.minimo +
                "$" +
                "<br/>"
              );
            },
          },
          legend: {
            enabled: false,
          },
          credits: {
            enabled: false,
          },
          xAxis: {
            type: "datetime",
            labels: {
              enabled: false,
              format: "{value:%Y-%m-%d}",
              rotation: 45,
              align: "left",
            },
          },
          series: [
            {
              data: data.reverse().map((d) => ({
                y: d.ultimoPrecio,
                fecha: d.fechaHora.split("T"),
                apertura: d.apertura,
                maximo: d.maximo,
                minimo: d.minimo,
              })),
              pointStart: Date.UTC(
                data.reverse()[0].fechaHora.substring(0, 4),
                data.reverse()[0].fechaHora.substring(5, 7),
                data.reverse()[0].fechaHora.substring(8, 10)
              ),
              pointInterval: 24 * 3600 * 1000,
            },
          ],
        }}
      />
    </View>
  );
};

export default Chart;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    // flex: 1,
    height: 300,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});
