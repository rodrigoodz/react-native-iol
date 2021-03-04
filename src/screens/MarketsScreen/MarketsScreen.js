import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { ButtonGroup } from "react-native-elements";
import FourColumnHeader from "../../components/FourColumnHeader";
import FourColumnItem from "../../components/FourColumnItem";
import GradientContainer from "../../components/GradientContainer";
import Selector from "../../components/Selector";
import Title from "../../components/Title";
import { Context as AuthContext } from "../../context/AuthContext";
import getInstrumentsByCountry from "../../helpers/getInstrumentsByCountry";
import getPanelByInstrumentAndCountry from "../../helpers/getPanelByInstrumentAndCountry";
import { useFetch } from "../../hooks/useFetch";

const MarketsScreen = () => {
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
  const [dofetch, setDofetch] = useState(false);

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
    "GET"
  );

  const handleCountrySelection = (country) => {
    const getInstruments = getInstrumentsByCountry(country);

    const getPanel = getPanelByInstrumentAndCountry(
      getInstruments[0].value,
      country
    );

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

    setSelectedValues({
      ...selectedValues,
      allPanels: getPanel,
      selectedPanel: getPanel[0].value,
      selectedInstrument: instrument,
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#131e31" }}>
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
                  setSelectedValues({ ...selectedValues, selectedPanel: value })
                }
              />
            </View>
          </View>
        </View>
      </GradientContainer>
      <GradientContainer
        firstColor="#132b38"
        secondColor="#050f17"
        padding={10}
        borderRadius={20}
        marginHorizontal={15}
      >
        <FourColumnHeader
          firstTitle={`Símbolo`}
          secondTitle={`Último`}
          thirdTitle={`Variación`}
          fourthTitle={`Volumen`}
        />
        {data ? (
          <>
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
          </>
        ) : (
          <View>
            {error ? <Text>{error}</Text> : null}
            <ActivityIndicator size="small" color="#fff" />
          </View>
        )}
      </GradientContainer>
    </View>
  );
};

export default MarketsScreen;
