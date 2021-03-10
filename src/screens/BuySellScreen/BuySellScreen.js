import React, { useContext, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  RefreshControl,
  ScrollView,
  Keyboard,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";

import { Context as AuthContext } from "../../context/AuthContext";
import { useFetch } from "../../hooks/useFetch";

import GoBackButton from "../../components/GoBackButton";
import GradientContainer from "../../components/GradientContainer";
import Title from "../../components/Title";
import TopPrices from "../../components/TopPrices";
import getFormattedMarket from "../../helpers/getFormattedMarket";
import BuySellOverlay from "./BuySellOverlay";
import MarketSelection from "./MarketSelection";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";
import TickerInfo from "./TickerInfo";

const BuySellScreen = ({ route, navigation }) => {
  const { text } = route.params;
  const [visibleOverlay, setVisibleOverlay] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [doFetch, setDoFetch] = useState(0);
  const [formValues, setFormValues] = useState({
    market: 0,
    tickerName: "",
    showdata: false,
  });
  const {
    state: { access_token },
  } = useContext(AuthContext);
  const [url, setUrl] = useState("");

  const { market, tickerName, showdata } = formValues;

  // console.log(market, tickerName, showdata);

  const handlePress = () => {
    Keyboard.dismiss();
    const formattedMarket = getFormattedMarket(market);
    if (tickerName.length > 0) {
      setUrl(
        `https://api.invertironline.com/api/v2/${formattedMarket}/Titulos/${tickerName}/Cotizacion`
      );
      setFormValues({ ...formValues, showdata: true });
    }
  };

  const handleMarketChange = (value) => {
    setFormValues({
      ...formValues,
      market: value,
      tickerName: "",
      showdata: false,
    });
    setUrl("");
  };

  const { data, error } = useFetch(url, access_token, "GET", doFetch);

  const onRefresh = () => {
    ToastAndroid.showWithGravity(
      "Actualizando datos",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
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
        <Title textTitle={text} />
        <MarketSelection country={market} setMarket={handleMarketChange} />
        <View style={styles.formContainer}>
          <SearchInput
            tickerName={tickerName}
            setTickerName={(value) =>
              setFormValues({ ...formValues, tickerName: value })
            }
            onSubmitEditing={handlePress}
          />

          <SearchButton onPress={handlePress} />
        </View>
      </GradientContainer>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {error && error.length ? (
          <Text style={styles.errorStyle}>No hay datos para tu busqueda</Text>
        ) : showdata && data ? (
          <>
            <TopPrices ticker={data} />
            <TickerInfo ticker={data} />
            <TouchableOpacity
              title="Open Overlay"
              onPress={() => setVisibleOverlay(!visibleOverlay)}
              style={[
                styles.buysellButton,
                { backgroundColor: text === "Comprar" ? "green" : "red" },
              ]}
            >
              <Text style={{ color: "white" }}>{text}</Text>
            </TouchableOpacity>
          </>
        ) : null}
      </ScrollView>
      <BuySellOverlay
        visible={visibleOverlay}
        setVisibleOverlay={() => setVisibleOverlay(!visibleOverlay)}
        market={market}
        tickerName={tickerName}
        access_token={access_token}
        operationType={text}
      />

      <GoBackButton navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#131e31" },
  formContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  buysellButton: {
    height: 40,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 15,
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  errorStyle: {
    color: "rgba(255,0,0,.8)",
    marginHorizontal: 15,
    alignSelf: "center",
  },
});

export default BuySellScreen;
