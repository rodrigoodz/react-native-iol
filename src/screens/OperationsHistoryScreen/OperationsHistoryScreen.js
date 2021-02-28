import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import Title from "../../components/Title";
import SelectOperationStatus from "./SelectOperationStatus";
import PickerComponent from "./PickerComponent";
import DatePicker from "./DatePicker";
import ButtonComponent from "../../components/ButtonComponent";
import OperationsHeader from "./OperationsHeader";
import OperationsItems from "./OperationsItems";

const datos = [
  {
    numero: 29351319,
    fechaOrden: "2020-12-17T12:07:12.147",
    tipo: "Compra",
    estado: "terminada",
    mercado: "BCBA",
    simbolo: "GGAL",
    cantidad: 3.0,
    monto: 384.0,
    modalidad: "precio_Limite",
    precio: 128.0,
    fechaOperada: "2020-12-17T12:08:23",
    cantidadOperada: 3.0,
    precioOperado: 128.0,
    montoOperado: 384.0,
  },
  {
    numero: 28977883,
    fechaOrden: "2020-12-02T16:53:56.763",
    tipo: "Venta",
    estado: "cancelada",
    mercado: "BCBA",
    simbolo: "GGAL",
    cantidad: 2.0,
    monto: 266.0,
    modalidad: "precio_Limite",
    precio: 133.0,
    fechaOperada: null,
    cantidadOperada: null,
    precioOperado: null,
    montoOperado: null,
  },
  {
    numero: 28257187,
    fechaOrden: "2020-11-09T11:40:04.063",
    tipo: "Compra",
    estado: "terminada",
    mercado: "BCBA",
    simbolo: "GGAL",
    cantidad: 2.0,
    monto: 247.8,
    modalidad: "precio_Limite",
    precio: 123.9,
    fechaOperada: "2020-11-09T11:48:21",
    cantidadOperada: 2.0,
    precioOperado: 123.9,
    montoOperado: 247.8,
  },
];

const OperationsHistoryScreen = ({ navigation }) => {
  const [selection, setSelection] = useState("todas");
  const [country, setCountry] = useState("argentina");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // TODO cuando apriente el boton 'buscar' debo asegurarme que las fechas no esten vacias y que tampoco la fecha de inicio no sea mayor a la de fin

  return (
    <View style={styles.container}>
      <Title textTitle="Operaciones" />
      <View style={styles.formContainer}>
        <View style={styles.column}>
          <PickerComponent
            country={country}
            setCountry={(e) => setCountry(e)}
          />
          <DatePicker
            date={startDate}
            setDate={(e) => setStartDate(e)}
            placeholder="desde"
            maxDate={endDate}
          />
          <DatePicker
            date={endDate}
            setDate={(e) => setEndDate(e)}
            placeholder="hasta"
            maxDate={null}
          />
        </View>
        <SelectOperationStatus
          selection={selection}
          setSelection={(e) => setSelection(e)}
        />
      </View>
      <ButtonComponent
        handleButton={() => console.log("Working")}
        title="Buscar"
      />
      <OperationsHeader />
      {datos.map((dato) => {
        return (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Operacion", { numero: dato.numero })
            }
            key={dato.numero}
          >
            <OperationsItems data={dato} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#4834D4",
  },
  formContainer: {
    flexDirection: "row",
    height: 200,
  },
  column: {
    flex: 1,
    marginLeft: 5,
    padding: 12,
  },
});

export default OperationsHistoryScreen;
