import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Title from "../../components/Title";
import SelectOperationStatus from "./SelectOperationStatus";
import PickerComponent from "./PickerComponent";
import DatePicker from "./DatePicker";
import ButtonComponent from "../../components/ButtonComponent";

const OperationsHistoryScreen = () => {
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
