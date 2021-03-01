import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { ButtonGroup } from "react-native-elements";

import { ScrollView } from "react-native-gesture-handler";
import FourColumnHeader from "../../components/FourColumnHeader";
import FourColumnItem from "../../components/FourColumnItem";
import Selector from "../../components/Selector";
import Title from "../../components/Title";
import getPanelByInstrument from "../../helpers/getPanelByInstrument";

const data = {
  titulos: [
    {
      simbolo: "ALUA",
      puntas: {
        cantidadCompra: 24.0,
        precioCompra: 46.85,
        precioVenta: 46.9,
        cantidadVenta: 3277.0,
      },
      ultimoPrecio: 46.9,
      variacionPorcentual: 1.18,
      apertura: 46.4,
      maximo: 47.2,
      minimo: 46.25,
      ultimoCierre: 46.35,
      volumen: 96008.0,
      cantidadOperaciones: 245.0,
      fecha: "2021-03-01T12:54:24.443",
      tipoOpcion: null,
      precioEjercicio: null,
      fechaVencimiento: null,
      mercado: "BCBA",
      moneda: "AR$",
    },
    {
      simbolo: "BBAR",
      puntas: {
        cantidadCompra: 140.0,
        precioCompra: 138.0,
        precioVenta: 138.9,
        cantidadVenta: 172.0,
      },
      ultimoPrecio: 138.0,
      variacionPorcentual: 0.8,
      apertura: 140.0,
      maximo: 141.0,
      minimo: 137.4,
      ultimoCierre: 136.9,
      volumen: 47331.0,
      cantidadOperaciones: 100.0,
      fecha: "2021-03-01T12:53:17.823",
      tipoOpcion: null,
      precioEjercicio: null,
      fechaVencimiento: null,
      mercado: "BCBA",
      moneda: "AR$",
    },
    {
      simbolo: "BMA",
      puntas: {
        cantidadCompra: 10.0,
        precioCompra: 208.05,
        precioVenta: 208.5,
        cantidadVenta: 98.0,
      },
      ultimoPrecio: 208.5,
      variacionPorcentual: 2.93,
      apertura: 205.5,
      maximo: 208.9,
      minimo: 205.0,
      ultimoCierre: 202.55,
      volumen: 16769.0,
      cantidadOperaciones: 112.0,
      fecha: "2021-03-01T12:53:12.95",
      tipoOpcion: null,
      precioEjercicio: null,
      fechaVencimiento: null,
      mercado: "BCBA",
      moneda: "AR$",
    },
    {
      simbolo: "BYMA",
      puntas: {
        cantidadCompra: 50.0,
        precioCompra: 628.0,
        precioVenta: 629.0,
        cantidadVenta: 237.0,
      },
      ultimoPrecio: 629.0,
      variacionPorcentual: 2.02,
      apertura: 620.0,
      maximo: 633.0,
      minimo: 620.0,
      ultimoCierre: 616.5,
      volumen: 3956.0,
      cantidadOperaciones: 67.0,
      fecha: "2021-03-01T12:52:15.653",
      tipoOpcion: null,
      precioEjercicio: null,
      fechaVencimiento: null,
      mercado: "BCBA",
      moneda: "AR$",
    },
    {
      simbolo: "CEPU",
      puntas: {
        cantidadCompra: 4999.0,
        precioCompra: 32.7,
        precioVenta: 32.8,
        cantidadVenta: 2090.0,
      },
      ultimoPrecio: 32.8,
      variacionPorcentual: 2.34,
      apertura: 32.1,
      maximo: 33.0,
      minimo: 31.85,
      ultimoCierre: 32.05,
      volumen: 96665.0,
      cantidadOperaciones: 123.0,
      fecha: "2021-03-01T12:48:59.13",
      tipoOpcion: null,
      precioEjercicio: null,
      fechaVencimiento: null,
      mercado: "BCBA",
      moneda: "AR$",
    },
    {
      simbolo: "COME",
      puntas: {
        cantidadCompra: 6161.0,
        precioCompra: 2.53,
        precioVenta: 2.55,
        cantidadVenta: 59739.0,
      },
      ultimoPrecio: 2.53,
      variacionPorcentual: -0.78,
      apertura: 2.55,
      maximo: 2.59,
      minimo: 2.5,
      ultimoCierre: 2.55,
      volumen: 129745.0,
      cantidadOperaciones: 98.0,
      fecha: "2021-03-01T12:48:34.827",
      tipoOpcion: null,
      precioEjercicio: null,
      fechaVencimiento: null,
      mercado: "BCBA",
      moneda: "AR$",
    },
    {
      simbolo: "CRES",
      puntas: {
        cantidadCompra: 5.0,
        precioCompra: 73.9,
        precioVenta: 74.1,
        cantidadVenta: 521.0,
      },
      ultimoPrecio: 74.1,
      variacionPorcentual: -2.24,
      apertura: 76.0,
      maximo: 76.6,
      minimo: 73.2,
      ultimoCierre: 75.8,
      volumen: 34313.0,
      cantidadOperaciones: 182.0,
      fecha: "2021-03-01T12:54:29.147",
      tipoOpcion: null,
      precioEjercicio: null,
      fechaVencimiento: null,
      mercado: "BCBA",
      moneda: "AR$",
    },
    {
      simbolo: "CVH",
      puntas: {
        cantidadCompra: 442.0,
        precioCompra: 319.5,
        precioVenta: 321.0,
        cantidadVenta: 65.0,
      },
      ultimoPrecio: 320.0,
      variacionPorcentual: 2.07,
      apertura: 316.0,
      maximo: 322.0,
      minimo: 315.0,
      ultimoCierre: 313.5,
      volumen: 783.0,
      cantidadOperaciones: 38.0,
      fecha: "2021-03-01T12:54:01.883",
      tipoOpcion: null,
      precioEjercicio: null,
      fechaVencimiento: null,
      mercado: "BCBA",
      moneda: "AR$",
    },
    {
      simbolo: "EDN",
      puntas: {
        cantidadCompra: 670.0,
        precioCompra: 28.0,
        precioVenta: 28.15,
        cantidadVenta: 600.0,
      },
      ultimoPrecio: 28.2,
      variacionPorcentual: 4.44,
      apertura: 28.1,
      maximo: 28.55,
      minimo: 27.6,
      ultimoCierre: 27.0,
      volumen: 44314.0,
      cantidadOperaciones: 141.0,
      fecha: "2021-03-01T12:53:57.38",
      tipoOpcion: null,
      precioEjercicio: null,
      fechaVencimiento: null,
      mercado: "BCBA",
      moneda: "AR$",
    },
    {
      simbolo: "GGAL",
      puntas: {
        cantidadCompra: 1625.0,
        precioCompra: 114.85,
        precioVenta: 114.95,
        cantidadVenta: 1850.0,
      },
      ultimoPrecio: 115.0,
      variacionPorcentual: 2.08,
      apertura: 114.2,
      maximo: 115.5,
      minimo: 114.0,
      ultimoCierre: 112.65,
      volumen: 290386.0,
      cantidadOperaciones: 555.0,
      fecha: "2021-03-01T12:53:35.177",
      tipoOpcion: null,
      precioEjercicio: null,
      fechaVencimiento: null,
      mercado: "BCBA",
      moneda: "AR$",
    },
    {
      simbolo: "MIRG",
      puntas: {
        cantidadCompra: 0.0,
        precioCompra: 1474.0,
        precioVenta: 1485.0,
        cantidadVenta: 110.0,
      },
      ultimoPrecio: 1474.0,
      variacionPorcentual: -0.64,
      apertura: 1523.5,
      maximo: 1523.5,
      minimo: 1472.0,
      ultimoCierre: 1483.5,
      volumen: 1073.0,
      cantidadOperaciones: 88.0,
      fecha: "2021-03-01T12:54:32.167",
      tipoOpcion: null,
      precioEjercicio: null,
      fechaVencimiento: null,
      mercado: "BCBA",
      moneda: "AR$",
    },
    {
      simbolo: "PAMP",
      puntas: {
        cantidadCompra: 4188.0,
        precioCompra: 80.7,
        precioVenta: 80.8,
        cantidadVenta: 274.0,
      },
      ultimoPrecio: 80.8,
      variacionPorcentual: 3.58,
      apertura: 78.0,
      maximo: 80.8,
      minimo: 78.0,
      ultimoCierre: 78.0,
      volumen: 106409.0,
      cantidadOperaciones: 193.0,
      fecha: "2021-03-01T12:52:45.803",
      tipoOpcion: null,
      precioEjercicio: null,
      fechaVencimiento: null,
      mercado: "BCBA",
      moneda: "AR$",
    },
    {
      simbolo: "SUPV",
      puntas: {
        cantidadCompra: 323.0,
        precioCompra: 57.1,
        precioVenta: 57.2,
        cantidadVenta: 177.0,
      },
      ultimoPrecio: 57.1,
      variacionPorcentual: 0.43,
      apertura: 57.0,
      maximo: 57.4,
      minimo: 56.0,
      ultimoCierre: 56.85,
      volumen: 86558.0,
      cantidadOperaciones: 123.0,
      fecha: "2021-03-01T12:54:43.91",
      tipoOpcion: null,
      precioEjercicio: null,
      fechaVencimiento: null,
      mercado: "BCBA",
      moneda: "AR$",
    },
    {
      simbolo: "TECO2",
      puntas: {
        cantidadCompra: 5.0,
        precioCompra: 174.4,
        precioVenta: 175.0,
        cantidadVenta: 1431.0,
      },
      ultimoPrecio: 175.0,
      variacionPorcentual: 1.77,
      apertura: 173.8,
      maximo: 180.0,
      minimo: 173.8,
      ultimoCierre: 171.95,
      volumen: 6841.0,
      cantidadOperaciones: 131.0,
      fecha: "2021-03-01T12:54:32.213",
      tipoOpcion: null,
      precioEjercicio: null,
      fechaVencimiento: null,
      mercado: "BCBA",
      moneda: "AR$",
    },
    {
      simbolo: "TGNO4",
      puntas: {
        cantidadCompra: 97.0,
        precioCompra: 41.55,
        precioVenta: 41.8,
        cantidadVenta: 10000.0,
      },
      ultimoPrecio: 41.55,
      variacionPorcentual: 0.36,
      apertura: 41.4,
      maximo: 41.65,
      minimo: 40.0,
      ultimoCierre: 41.4,
      volumen: 75984.0,
      cantidadOperaciones: 103.0,
      fecha: "2021-03-01T12:42:30.81",
      tipoOpcion: null,
      precioEjercicio: null,
      fechaVencimiento: null,
      mercado: "BCBA",
      moneda: "AR$",
    },
    {
      simbolo: "TGSU2",
      puntas: {
        cantidadCompra: 3837.0,
        precioCompra: 141.75,
        precioVenta: 142.0,
        cantidadVenta: 76.0,
      },
      ultimoPrecio: 142.0,
      variacionPorcentual: 2.26,
      apertura: 140.0,
      maximo: 142.0,
      minimo: 139.0,
      ultimoCierre: 138.85,
      volumen: 3975.0,
      cantidadOperaciones: 32.0,
      fecha: "2021-03-01T12:51:24.107",
      tipoOpcion: null,
      precioEjercicio: null,
      fechaVencimiento: null,
      mercado: "BCBA",
      moneda: "AR$",
    },
    {
      simbolo: "TRAN",
      puntas: {
        cantidadCompra: 4.0,
        precioCompra: 26.35,
        precioVenta: 26.5,
        cantidadVenta: 925.0,
      },
      ultimoPrecio: 26.5,
      variacionPorcentual: 0.56,
      apertura: 26.1,
      maximo: 27.0,
      minimo: 26.1,
      ultimoCierre: 26.35,
      volumen: 37949.0,
      cantidadOperaciones: 78.0,
      fecha: "2021-03-01T12:45:32.097",
      tipoOpcion: null,
      precioEjercicio: null,
      fechaVencimiento: null,
      mercado: "BCBA",
      moneda: "AR$",
    },
    {
      simbolo: "TXAR",
      puntas: {
        cantidadCompra: 2440.0,
        precioCompra: 51.8,
        precioVenta: 52.0,
        cantidadVenta: 3410.0,
      },
      ultimoPrecio: 52.0,
      variacionPorcentual: 0.19,
      apertura: 51.1,
      maximo: 52.2,
      minimo: 51.1,
      ultimoCierre: 51.9,
      volumen: 35373.0,
      cantidadOperaciones: 109.0,
      fecha: "2021-03-01T12:49:19.13",
      tipoOpcion: null,
      precioEjercicio: null,
      fechaVencimiento: null,
      mercado: "BCBA",
      moneda: "AR$",
    },
    {
      simbolo: "VALO",
      puntas: {
        cantidadCompra: 4035.0,
        precioCompra: 25.8,
        precioVenta: 26.0,
        cantidadVenta: 1680.0,
      },
      ultimoPrecio: 25.85,
      variacionPorcentual: 0.77,
      apertura: 26.0,
      maximo: 26.3,
      minimo: 25.65,
      ultimoCierre: 25.65,
      volumen: 18219.0,
      cantidadOperaciones: 67.0,
      fecha: "2021-03-01T12:52:14.653",
      tipoOpcion: null,
      precioEjercicio: null,
      fechaVencimiento: null,
      mercado: "BCBA",
      moneda: "AR$",
    },
    {
      simbolo: "YPFD",
      puntas: {
        cantidadCompra: 10.0,
        precioCompra: 646.25,
        precioVenta: 648.9,
        cantidadVenta: 10.0,
      },
      ultimoPrecio: 649.0,
      variacionPorcentual: 1.55,
      apertura: 646.0,
      maximo: 659.95,
      minimo: 646.0,
      ultimoCierre: 639.05,
      volumen: 37292.0,
      cantidadOperaciones: 427.0,
      fecha: "2021-03-01T12:54:10.97",
      tipoOpcion: null,
      precioEjercicio: null,
      fechaVencimiento: null,
      mercado: "BCBA",
      moneda: "AR$",
    },
  ],
};

const MarketsScreen = () => {
  const buttons = ["Argentina", "Estados Unidos", "Indices"];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [instrumentSelected, setInstrumentSelected] = useState("Acciones");
  const [allPanels, setAllPanels] = useState([]);
  const [panelSelected, setPanelSelected] = useState("");

  useEffect(() => {
    const getPanel = getPanelByInstrument(instrumentSelected);
    setAllPanels(getPanel);
    return () => {};
  }, [instrumentSelected]);

  return (
    <View style={{ flex: 1, padding: 10, backgroundColor: "#4834D4" }}>
      <Title textTitle="Cotizaciones" />
      <View
        style={{
          backgroundColor: "rgba(255,255,255,0.5)",
          padding: 10,
          borderRadius: 10,
          marginTop: 15,
        }}
      >
        <ButtonGroup
          onPress={setSelectedIndex}
          containerStyle={{ height: 20 }}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{ height: 30 }}
        />
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Text>Instrumento</Text>
            <Selector
              options={[
                { label: "Acciones", value: "Acciones" },
                { label: "Bonos", value: "Bonos" },
                { label: "Opciones", value: "Opciones" },
                { label: "Cauciones", value: "Cauciones" },
                { label: "Futuros", value: "Futuros" },
                { label: "FCI", value: "FCI" },
              ]}
              selected={instrumentSelected}
              setSelected={setInstrumentSelected}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text>Panel</Text>
            <Selector
              options={allPanels}
              selected={panelSelected}
              setSelected={setPanelSelected}
            />
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <FourColumnHeader
          firstTitle={`Símbolo`}
          secondTitle={`Último`}
          thirdTitle={`Variación`}
          fourthTitle={`Volumen`}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          {data.titulos.map((e) => {
            return (
              <FourColumnItem
                firstText={`${e.simbolo}`}
                secondText={`$${e.ultimoPrecio.toFixed(2)}`}
                thirdText={`${e.variacionPorcentual}%`}
                fourthText={`${e.volumen} M`}
                key={e.simbolo}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(235,255,255,0.8)",
    padding: 10,
    marginTop: 15,
    borderRadius: 10,
  },
});

export default MarketsScreen;
