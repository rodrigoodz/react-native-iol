import React, { useContext, useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import { Context as AuthContext } from "../../context/AuthContext";
import { useFetch } from "../../hooks/useFetch";

import DatePicker from "./DatePicker";
import FiveColumnHeader from "../../components/FiveColumnHeader";
import FiveColumnItem from "../../components/FiveColumnItem";
import GradientContainer from "../../components/GradientContainer";
import SelectOperationStatus from "./SelectOperationStatus";
import Selector from "../../components/Selector";
import Title from "../../components/Title";

// const datos = [
//   {
//     numero: 29351319,
//     fechaOrden: "2020-12-17T12:07:12.147",
//     tipo: "Compra",
//     estado: "terminada",
//     mercado: "BCBA",
//     simbolo: "GGAL",
//     cantidad: 3.0,
//     monto: 384.0,
//     modalidad: "precio_Limite",
//     precio: 128.0,
//     fechaOperada: "2020-12-17T12:08:23",
//     cantidadOperada: 3.0,
//     precioOperado: 128.0,
//     montoOperado: 384.0,
//   },
//   {
//     numero: 28977883,
//     fechaOrden: "2020-12-02T16:53:56.763",
//     tipo: "Venta",
//     estado: "cancelada",
//     mercado: "BCBA",
//     simbolo: "GGAL",
//     cantidad: 2.0,
//     monto: 266.0,
//     modalidad: "precio_Limite",
//     precio: 133.0,
//     fechaOperada: null,
//     cantidadOperada: null,
//     precioOperado: null,
//     montoOperado: null,
//   },
//   {
//     numero: 28257187,
//     fechaOrden: "2020-11-09T11:40:04.063",
//     tipo: "Compra",
//     estado: "terminada",
//     mercado: "BCBA",
//     simbolo: "GGAL",
//     cantidad: 2.0,
//     monto: 247.8,
//     modalidad: "precio_Limite",
//     precio: 123.9,
//     fechaOperada: "2020-11-09T11:48:21",
//     cantidadOperada: 2.0,
//     precioOperado: 123.9,
//     montoOperado: 247.8,
//   },
// ];

const OperationsHistoryScreen = ({ navigation }) => {
  const {
    state: { access_token },
  } = useContext(AuthContext);
  const [formValues, setFormValues] = useState({
    operationType: "todas",
    country: "argentina",
    startDate: new Date(),
    endDate: new Date(),
  });

  const { operationType, country, startDate, endDate } = formValues;
  // TODO cuando apriente el boton 'buscar' debo asegurarme que las fechas no esten vacias y que tampoco la fecha de inicio no sea mayor a la de fin

  const formattedStartDate = `${startDate.getFullYear()}-${
    startDate.getMonth() + 1
  }-${startDate.getDate()}`;
  const formattedEndDate = `${endDate.getFullYear()}-${
    endDate.getMonth() + 1
  }-${endDate.getDate()}`;

  const { data } = useFetch(
    `https://api.invertironline.com/api/v2/operaciones?estado=${operationType}&fechaDesde=${formattedStartDate}&fechaHasta=${formattedEndDate}&pais=${country}`,
    access_token,
    "GET"
  );

  return (
    <View style={styles.container}>
      <GradientContainer
        firstColor="#2b5a7f"
        secondColor="#193952"
        padding={10}
        borderBottomLeftRadius={30}
        borderBottomRightRadius={30}
        marginBottom={20}
      >
        <Title textTitle="Operaciones" />
        <View style={styles.formContainer}>
          <View style={styles.column}>
            <Selector
              options={[
                { label: "Argentina", value: "argentina" },
                { label: "Estados Unidos", value: "estados_unidos" },
              ]}
              selected={country}
              setSelected={(value) =>
                setFormValues({ ...formValues, country: value })
              }
            />

            <DatePicker
              date={startDate}
              setDate={(value) =>
                setFormValues({ ...formValues, startDate: value })
              }
              placeholder="desde"
              maxDate={endDate}
            />
            <DatePicker
              date={endDate}
              setDate={(value) =>
                setFormValues({ ...formValues, endDate: value })
              }
              placeholder="hasta"
              maxDate={null}
              minDate={startDate}
            />
          </View>

          <SelectOperationStatus
            selection={operationType}
            setSelection={(value) =>
              setFormValues({ ...formValues, operationType: value })
            }
          />
        </View>
      </GradientContainer>
      <GradientContainer
        firstColor="#132b38"
        secondColor="#050f17"
        padding={10}
        borderRadius={20}
        marginHorizontal={8}
      >
        <FiveColumnHeader
          firstTitle="Nro. de Trans"
          secondTitle="Fecha Orden"
          thirdTitle="Tipo"
          fourthTitle="Simbolo"
          fifthTitle="Estado"
        />
        {data
          ? data.map((d) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Operacion", { numero: d.numero })
                  }
                  key={d.numero}
                >
                  <FiveColumnItem
                    firstText={d.numero}
                    secondText={d.fechaOrden
                      .replace(/T.*/, "")
                      .split("-")
                      .reverse()
                      .join("-")}
                    thirdText={d.tipo}
                    fourthText={d.simbolo}
                    fifthText={d.estado}
                  />
                </TouchableOpacity>
              );
            })
          : null}
      </GradientContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131e31",
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
  listContainer: {
    backgroundColor: "rgba(235,255,255,0.8)",
    padding: 10,
    borderRadius: 10,
    marginTop: 15,
  },
});

export default OperationsHistoryScreen;
