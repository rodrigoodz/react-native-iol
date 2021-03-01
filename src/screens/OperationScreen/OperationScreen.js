import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import GoBackButton from "../../components/GoBackButton";
import Title from "../../components/Title";
import Commisions from "./Commisions";
import InfoOperation from "./InfoOperation";
import TransactionStates from "./TransactionStates";

const operation = {
  numero: 29351319,
  mercado: "bcba",
  simbolo: "GGAL",
  moneda: "peso_Argentino",
  tipo: "compra",
  fechaAlta: "2020-12-17T12:07:12.147",
  validez: "2020-12-17T17:00:00",
  fechaOperado: "2020-12-17T12:08:23",
  estadoActual: "terminada",
  estados: [
    {
      detalle: "Iniciada",
      fecha: "2020-12-17T12:07:12.147",
    },
    {
      detalle: "En Proceso",
      fecha: "2020-12-17T12:07:14.117",
    },
    {
      detalle: "Operación de 3 Título/s",
      fecha: "2020-12-17T12:08:23",
    },
    {
      detalle: "Terminada",
      fecha: "2020-12-17T12:08:23.16",
    },
  ],
  aranceles: [
    {
      tipo: "Derechos De Mercado",
      neto: 0.31,
      iva: 0.06,
    },
    {
      tipo: "Comisión",
      neto: 1.92,
      iva: 0.4,
    },
  ],
  operaciones: [
    {
      fecha: "2020-12-17T12:08:23",
      cantidad: 3.0,
      precio: 128.0,
    },
  ],
  precio: 128.0,
  cantidad: 3.0,
  monto: 384.0,
  modalidad: "precio_Limite",
};

const OperationScreen = ({ route, navigation }) => {
  const { numero } = route.params;

  return (
    <View style={{ flex: 1, padding: 10, backgroundColor: "#4834D4" }}>
      <Title textTitle={`Operacion N° ${numero}`} />
      <InfoOperation
        simbolo={operation.simbolo}
        tipo={operation.tipo}
        fechaAlta={operation.fechaAlta}
        validez={operation.validez}
        precio={operation.precio}
        cantidad={operation.cantidad}
      />
      <TransactionStates estados={operation.estados} />
      <Commisions aranceles={operation.aranceles} />
      <GoBackButton navigation={navigation} />
    </View>
  );
};

export default OperationScreen;
