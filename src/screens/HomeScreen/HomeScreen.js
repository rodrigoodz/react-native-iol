import React, { useContext, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  RefreshControl,
  ToastAndroid,
} from "react-native";

import { Context as AuthContext } from "../../context/AuthContext";
import { useFetch } from "../../hooks/useFetch";

import BalanceInfo from "./BalanceInfo";
import CollapseItem from "../../components/CollapseItem";
import GradientContainer from "../../components/GradientContainer";
import LoadingComponent from "../../components/LoadingComponent";
import Title from "../../components/Title";
import FetchCounterInfo from "./FetchCounterInfo";

import { AdMobBanner } from "expo-ads-admob";

const HomeScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [doFetch, setDoFetch] = useState(0);
  const {
    state: { access_token },
  } = useContext(AuthContext);

  // when 'doFetch' changes, the hook will do a fetch to the url...
  const { data, error } = useFetch(
    "https://api.invertironline.com/api/v2/estadocuenta",
    access_token,
    "GET",
    doFetch
  );

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

  if (!data && doFetch == 0) {
    return <LoadingComponent />;
  }

  if (data) {
    const {
      totalEnPesos,
      estadisticas,
      cuentas: [
        {
          titulosValorizados,
          disponible,
          comprometido,
          margenDescubierto,
          saldos: [, hrs24, hrs48, hrs72, masHrs72],
        },
      ],
    } = data;

    return (
      <View style={styles.viewContainer}>
        <ScrollView
          style={styles.scrollviewContainer}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <GradientContainer
            firstColor="#2b5a7f"
            secondColor="#193952"
            padding={10}
            borderBottomLeftRadius={30}
            borderBottomRightRadius={30}
            marginBottom={40}
          >
            <Title textTitle="Cuenta de inversión Argentina" />
            <BalanceInfo
              totalEnPesos={totalEnPesos}
              titulosValorizados={titulosValorizados}
              disponible={disponible}
              comprometido={comprometido}
              margenDescubierto={margenDescubierto}
            />
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Estadisticas", {
                  statistics: estadisticas,
                })
              }
              style={{ alignSelf: "flex-start" }}
            >
              <Text style={styles.buttonStyle}>Estadísticas</Text>
            </TouchableOpacity>
          </GradientContainer>

          <View style={{ marginHorizontal: 15 }}>
            <CollapseItem
              title="a 24hs"
              comprometido={hrs24.comprometido}
              disponible={hrs24.disponible}
              saldo={hrs24.disponible}
            />
            <CollapseItem
              title="a 48hs"
              comprometido={hrs48.comprometido}
              disponible={hrs48.disponible}
              saldo={hrs48.disponible}
            />
            <CollapseItem
              title="a 72hs"
              comprometido={hrs72.comprometido}
              disponible={hrs72.disponible}
              saldo={hrs72.disponible}
            />
            <CollapseItem
              title="a +72hs"
              comprometido={masHrs72.comprometido}
              disponible={masHrs72.disponible}
              saldo={masHrs72.disponible}
            />
          </View>
          {/* <UpdateController /> */}
          <StatusBar />
        </ScrollView>
        <FetchCounterInfo navigation={navigation} />
        <View style={{ alignItems: "center" }}>
          <AdMobBanner
            bannerSize="banner"
            adUnitID="ca-app-pub-2009970378712355/2274816498"
            servePersonalizedAds
            onDidFailToReceiveAdWithError={(e) => console.log(e)}
          />
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.viewContainer}>
        <ScrollView
          style={styles.scrollviewContainer}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <GradientContainer
            firstColor="#2b5a7f"
            secondColor="#193952"
            padding={10}
            borderBottomLeftRadius={30}
            borderBottomRightRadius={30}
            marginBottom={40}
          >
            <Title textTitle="Cuenta de inversión Argentina" />
            <BalanceInfo />
            <TouchableOpacity style={{ alignSelf: "flex-start" }}>
              <Text style={styles.buttonStyle}>Estadísticas</Text>
            </TouchableOpacity>
          </GradientContainer>

          <View style={{ marginHorizontal: 15 }}>
            <CollapseItem title="a 24hs" />
            <CollapseItem title="a 48hs" />
            <CollapseItem title="a 72hs" />
            <CollapseItem title="a +72hs" />
          </View>
          <StatusBar />
        </ScrollView>
        <FetchCounterInfo navigation={navigation} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  viewContainer: { flex: 1, backgroundColor: "#131e31" },
  scrollviewContainer: {
    flex: 1,
  },
  buttonStyle: {
    marginLeft: 5,
    fontSize: 18,
    marginVertical: 10,
    color: "#0091c8",
    fontFamily: "SairaSemiBold",
  },
});

export default HomeScreen;
