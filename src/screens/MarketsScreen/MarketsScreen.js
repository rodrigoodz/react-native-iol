import React, { useContext, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  TextInput,
  RefreshControl,
} from "react-native";
import { ButtonGroup, Icon } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";

import { Context as AuthContext } from "../../context/AuthContext";
import { useFetch } from "../../hooks/useFetch";

import getInstrumentsByCountry from "../../helpers/getInstrumentsByCountry";
import getPanelByInstrumentAndCountry from "../../helpers/getPanelByInstrumentAndCountry";

import FourColumnHeader from "../../components/FourColumnHeader";
import FourColumnItem from "../../components/FourColumnItem";
import GradientContainer from "../../components/GradientContainer";
import Selector from "../../components/Selector";
import Title from "../../components/Title";

//TODO hacer que cada item sea TouchableOpacity, me lleve a otra pantalla  (le mando algunos params) y muestro toda la info de cierto ticker pero mucho mas detallado, en esa nueva pantalla puedo poner un botton que diga MAS INFO y traer la caja de puntas completa y otro boton, ver grafico, y ahi llamo a getTickerBetweenDates

const MarketsScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [doFetch, setDoFetch] = useState(0);
  const {
    state: { access_token },
  } = useContext(AuthContext);

  const buttons = ["Argentina", "Estados Unidos"];

  const [selectedValues, setSelectedValues] = useState({
    selectedInstrument: "Acciones",
    selectedPanel: "Merval",
    selectedCountry: 0,
    allInstruments: [
      {
        label: "Acciones",
        value: "Acciones",
      },
      {
        label: "Bonos",
        value: "Bonos",
      },
      {
        label: "Opciones",
        value: "Opciones",
      },
      {
        label: "Cauciones",
        value: "Cauciones",
      },
      {
        label: "Futuros",
        value: "Futuros",
      },
      {
        label: "FCI",
        value: "FCI",
      },
    ],
    allPanels: [
      {
        label: "Merval",
        value: "Merval",
      },
      {
        label: "Panel General",
        value: "Panel General",
      },
      {
        label: "Merval 25",
        value: "Merval 25",
      },
      {
        label: "Merval Argentina",
        value: "Merval Argentina",
      },
      {
        label: "Burcap",
        value: "Burcap",
      },
      {
        label: "CEDEARs",
        value: "CEDEARs",
      },
    ],
  });
  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const {
    selectedInstrument,
    selectedPanel,
    selectedCountry,
    allInstruments,
    allPanels,
  } = selectedValues;

  const formattedCountry =
    selectedCountry === 0 ? "argentina" : "estados_unidos";

  const formattedPanel = encodeURI(selectedPanel);

  // console.log(
  //   `https://api.invertironline.com/api/v2/Cotizaciones/${selectedInstrument}/${formattedPanel}/${formattedCountry}`
  // );

  // TODO mejorar el manejo de errores visuales para el usuario
  const { data, error } = useFetch(
    `https://api.invertironline.com/api/v2/Cotizaciones/${selectedInstrument}/${formattedPanel}/${formattedCountry}`,
    access_token,
    "GET",
    doFetch
  );

  const handleCountrySelection = (country) => {
    const getInstruments = getInstrumentsByCountry(country);

    const getPanel = getPanelByInstrumentAndCountry(
      getInstruments[0].value,
      country
    );

    setInputValue("");
    setFilteredData([]);
    setSelectedValues({
      ...selectedValues,
      allInstruments: getInstruments,
      allPanels: getPanel,
      selectedPanel: getPanel[0].value,
      selectedInstrument: getInstruments[0].value,
      selectedCountry: country,
    });
  };

  const handleInstrumentSelection = (instrument) => {
    const getPanel = getPanelByInstrumentAndCountry(
      instrument,
      selectedCountry
    );

    setInputValue("");
    setFilteredData([]);

    setSelectedValues({
      ...selectedValues,
      allPanels: getPanel,
      selectedPanel: getPanel[0].value,
      selectedInstrument: instrument,
    });
  };

  const handleChange = (text) => {
    setInputValue(text);
    const result = data.titulos.filter(
      (titulo) => titulo.simbolo.slice(0, text.length) === text.toUpperCase()
    );
    setFilteredData(result);
  };

  const onRefresh = () => {
    setRefreshing(true);

    setDoFetch(doFetch + 1);
    setRefreshing(false);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#131e31",
      }}
    >
      <GradientContainer
        firstColor="#2b5a7f"
        secondColor="#193952"
        padding={10}
        borderBottomLeftRadius={30}
        borderBottomRightRadius={30}
        marginBottom={20}
      >
        <Title textTitle="Cotizaciones" />
        <View
          style={{
            padding: 10,
          }}
        >
          <ButtonGroup
            onPress={handleCountrySelection}
            containerStyle={{ height: 20 }}
            selectedIndex={selectedCountry}
            buttons={buttons}
            containerStyle={{
              height: 40,
              backgroundColor: "#131e31",
              borderRadius: 10,
            }}
            selectedButtonStyle={{
              backgroundColor: "#212f49",
            }}
            textStyle={{
              fontFamily: "SairaThin",
            }}
          />
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: "white",
                  fontFamily: "SairaBold",
                  alignSelf: "center",
                }}
              >
                Instrumento
              </Text>
              <Selector
                options={allInstruments}
                selected={selectedInstrument}
                setSelected={handleInstrumentSelection}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: "white",
                  fontFamily: "SairaBold",
                  alignSelf: "center",
                }}
              >
                Panel
              </Text>
              <Selector
                options={allPanels}
                selected={selectedPanel}
                setSelected={(value) =>
                  setSelectedValues({
                    ...selectedValues,
                    selectedPanel: value,
                  })
                }
              />
            </View>
          </View>
        </View>
        {data ? (
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              justifyContent: "center",
              backgroundColor: "rgba(255,255,255,0.5)",
              borderRadius: 5,
              width: 100,
            }}
          >
            <Icon
              type="ant-design"
              name="search1"
              size={18}
              color="rgba(255,255,255,0.5)"
              style={{ marginHorizontal: 10 }}
            />
            <TextInput
              style={{
                height: 20,
                color: "rgba(255,255,255,0.5)",
              }}
              placeholder="Buscar"
              onChangeText={(text) => handleChange(text)}
              value={inputValue}
            />
          </View>
        ) : null}
      </GradientContainer>

      <LinearGradient
        colors={["#132b38", "#050f17"]}
        style={{
          padding: 10,
          borderRadius: 20,
          marginHorizontal: 15,
          marginBottom: 5,
          flex: 1,
        }}
      >
        <FourColumnHeader
          firstTitle={`Símbolo`}
          secondTitle={`Último`}
          thirdTitle={`Variación`}
          fourthTitle={`Volumen`}
        />
        {data ? (
          filteredData.length > 0 ? (
            <ScrollView showsVerticalScrollIndicator={false}>
              {filteredData.map((e) => {
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
          ) : (
            <ScrollView
              showsVerticalScrollIndicator={false}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
            >
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
          )
        ) : (
          <View>
            {error ? <Text>{error}</Text> : null}
            <ActivityIndicator size="small" color="#fff" />
          </View>
        )}
      </LinearGradient>
    </View>
  );
};

export default MarketsScreen;
