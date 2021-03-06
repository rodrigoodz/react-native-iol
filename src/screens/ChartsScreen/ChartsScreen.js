import React, { useContext, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { ButtonGroup } from "react-native-elements";

import { Context as AuthContext } from "../../context/AuthContext";
import { useFetch } from "../../hooks/useFetch";

import DatePicker from "../../components/DatePicker";
import GradientContainer from "../../components/GradientContainer";

import Title from "../../components/Title";
import GoBackButton from "../../components/GoBackButton";
import Chart from "./Chart";

const ChartsScreen = ({ route, navigation }) => {
  const start = new Date();
  start.setDate(start.getDate() - 15);
  const end = new Date();

  const { asset, market } = route.params;
  const {
    state: { access_token },
  } = useContext(AuthContext);
  const [formValues, setFormValues] = useState({
    startDate: start,
    endDate: end,
    type: 0,
  });

  const { startDate, endDate, type } = formValues;

  const formattedType = type === 0 ? "ajustada" : "sinAjustar";

  const formattedStartDate = `${startDate.getFullYear()}-${
    startDate.getMonth() + 1
  }-${startDate.getDate()}`;

  const formattedEndDate = `${endDate.getFullYear()}-${
    endDate.getMonth() + 1
  }-${endDate.getDate()}`;

  console.log(
    `https://api.invertironline.com/api/v2/${market}/Titulos/${asset}/Cotizacion/seriehistorica/${formattedStartDate}/${formattedEndDate}/${formattedType}`
  );

  const { data } = useFetch(
    `https://api.invertironline.com/api/v2/${market}/Titulos/${asset}/Cotizacion/seriehistorica/${formattedStartDate}/${formattedEndDate}/${formattedType}`,
    access_token,
    "GET"
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#131e31" }}>
      <GradientContainer
        firstColor="#2b5a7f"
        secondColor="#193952"
        padding={10}
        borderBottomLeftRadius={30}
        borderBottomRightRadius={30}
        marginBottom={10}
      >
        <Title textTitle={`Grafico ${asset}`} />
        <ButtonGroup
          onPress={(value) => setFormValues({ ...formValues, type: value })}
          containerStyle={{ height: 20 }}
          selectedIndex={type}
          buttons={["Ajustada", "Sin Ajustar"]}
          containerStyle={{
            height: 40,
            backgroundColor: "#131e31",
            borderRadius: 10,
            marginTop: 15,
          }}
          selectedButtonStyle={{
            backgroundColor: "#212f49",
          }}
          textStyle={{
            fontFamily: "SairaThin",
          }}
        />
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              justifyContent: "center",
              flex: 1,
              margin: 10,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontFamily: "SairaBold",
                alignSelf: "center",
              }}
            >
              Desde
            </Text>

            <DatePicker
              date={startDate}
              setDate={(value) =>
                setFormValues({ ...formValues, startDate: value })
              }
              placeholder="desde"
              maxDate={endDate}
            />
          </View>
          <View
            style={{
              justifyContent: "center",
              flex: 1,
              margin: 10,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontFamily: "SairaBold",
                alignSelf: "center",
              }}
            >
              Hasta
            </Text>
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
        </View>
      </GradientContainer>

      {data && data.length > 0 ? (
        <Chart data={data} asset={asset} />
      ) : data && data.length === 0 ? (
        <Text
          style={{
            fontSize: 18,
            color: "white",
            padding: 20,
          }}
        >
          No existen datos para el intervalo o este ticker no tiene un grafico
          disponible
        </Text>
      ) : (
        <ActivityIndicator size="large" color="white" />
      )}
      <GoBackButton navigation={navigation} />
    </View>
  );
};

export default ChartsScreen;
