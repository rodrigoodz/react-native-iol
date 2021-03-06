import React, { useContext, useState } from "react";
import { Text, View } from "react-native";
import { ButtonGroup } from "react-native-elements";

import { Context as AuthContext } from "../../context/AuthContext";
import { useFetch } from "../../hooks/useFetch";

import DatePicker from "../../components/DatePicker";
import GradientContainer from "../../components/GradientContainer";

import Title from "../../components/Title";
import GoBackButton from "../../components/GoBackButton";

const ChartsScreen = ({ route, navigation }) => {
  const { asset, market } = route.params;
  const {
    state: { access_token },
  } = useContext(AuthContext);
  const [formValues, setFormValues] = useState({
    startDate: new Date(),
    endDate: new Date(),
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

  console.log(formattedType, formattedStartDate, formattedEndDate);

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
        <Title textTitle={`Graficar`} />
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
      {/* //TODO si hay data la grafico */}
      {data ? <Text>Hay data</Text> : null}
      <GoBackButton navigation={navigation} />
    </View>
  );
};

export default ChartsScreen;
