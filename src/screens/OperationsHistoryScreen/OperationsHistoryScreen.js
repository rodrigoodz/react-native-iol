import React, { useContext, useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
} from "react-native";

import { Context as AuthContext } from "../../context/AuthContext";
import { useFetch } from "../../hooks/useFetch";

import FiveColumnHeader from "../../components/FiveColumnHeader";
import FiveColumnItem from "../../components/FiveColumnItem";
import GradientContainer from "../../components/GradientContainer";
import SelectOperationStatus from "./SelectOperationStatus";
import Selector from "../../components/Selector";
import Title from "../../components/Title";
import DatePicker from "../../components/DatePicker";

const OperationsHistoryScreen = ({ navigation }) => {
  const start = new Date();
  start.setDate(start.getDate() - 15);
  const end = new Date();
  const {
    state: { access_token },
  } = useContext(AuthContext);
  const [refreshing, setRefreshing] = useState(false);
  const [doFetch, setDoFetch] = useState(0);
  const [formValues, setFormValues] = useState({
    operationType: "todas",
    country: "argentina",
    startDate: start,
    endDate: end,
  });

  const { operationType, country, startDate, endDate } = formValues;

  const formattedStartDate = `${startDate.getFullYear()}-${
    startDate.getMonth() + 1
  }-${startDate.getDate()}`;
  const formattedEndDate = `${endDate.getFullYear()}-${
    endDate.getMonth() + 1
  }-${endDate.getDate()}`;

  const { data } = useFetch(
    `https://api.invertironline.com/api/v2/operaciones?estado=${operationType}&fechaDesde=${formattedStartDate}&fechaHasta=${formattedEndDate}&pais=${country}`,
    access_token,
    "GET",
    doFetch
  );

  const onRefresh = () => {
    setRefreshing(true);

    setDoFetch(doFetch + 1);
    setRefreshing(false);
  };

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
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {data ? (
            data.map((d) => {
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
          ) : (
            <View>
              <ActivityIndicator size="small" color="#fff" />
            </View>
          )}
        </ScrollView>
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
