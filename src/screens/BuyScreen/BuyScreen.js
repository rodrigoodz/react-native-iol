import React, { useContext, useState } from "react";
import { Text } from "react-native";
import { StyleSheet, View } from "react-native";
import GoBackButton from "../../components/GoBackButton";
import GradientContainer from "../../components/GradientContainer";
import Title from "../../components/Title";
import TopPrices from "../../components/TopPrices";
import { Context as AuthContext } from "../../context/AuthContext";
import { useFetch } from "../../hooks/useFetch";
import CountrySelection from "./CountrySelection";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";

const BuyScreen = ({ navigation }) => {
  const [formValues, setFormValues] = useState({
    market: 0,
    tickerName: "",
  });
  const {
    state: { access_token },
  } = useContext(AuthContext);
  const [url, setUrl] = useState("");

  const { market, tickerName } = formValues;

  let formattedMarket = "";
  switch (market) {
    case 0:
      formattedMarket = "bCBA";
      break;
    case 1:
      formattedMarket = "nyse";
    case 2:
      formattedMarket = "nasdaq";
    case 3:
      formattedMarket = "amex";
    case 4:
      formattedMarket = "bcs";
    case 5:
      formattedMarket = "rofx";
    default:
      break;
  }

  const handlePress = () => {
    if (tickerName.length > 0) {
      setUrl(
        `https://api.invertironline.com/api/v2/${formattedMarket}/Titulos/${tickerName}/Cotizacion`
      );
    }
  };

  const { data, error } = useFetch(url, access_token, "GET");

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
        <Title textTitle="Comprar" />
        <CountrySelection
          country={market}
          setMarket={(value) => setFormValues({ ...formValues, market: value })}
        />
        <View style={styles.formContainer}>
          <SearchInput
            tickerName={tickerName}
            setTickerName={(value) =>
              setFormValues({ ...formValues, tickerName: value })
            }
          />

          <SearchButton onPress={handlePress} />
        </View>
      </GradientContainer>
      {error && error.length > 0 ? (
        <Text
          style={{
            color: "rgba(255,0,0,.8)",
            marginHorizontal: 15,
            alignSelf: "center",
          }}
        >
          No hay datos para tu busqueda
        </Text>
      ) : data !== null ? (
        data.puntas.length === 0 ? (
          <Text
            style={{
              color: "rgba(255,0,0,.8)",
              marginHorizontal: 15,
              alignSelf: "center",
            }}
          >
            Actualmente no hay informacion de las puntas de compra y venta
          </Text>
        ) : (
          <TopPrices ticker={data} />
        )
      ) : null}

      <GoBackButton navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
});

export default BuyScreen;
