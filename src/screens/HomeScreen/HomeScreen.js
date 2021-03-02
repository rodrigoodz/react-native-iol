import React, { useContext, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
} from "react-native";

import Title from "../../components/Title";
import BalanceInfo from "./BalanceInfo";
import CollapseItem from "../../components/CollapseItem";
import { RefreshControl } from "react-native";
import UpdateController from "./UpdateController";
import { Context as AuthContext } from "../../context/AuthContext";
import { useFetch } from "../../hooks/useFetch";

const HomeScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const {
    state: { access_token },
  } = useContext(AuthContext);

  const { data, error } = useFetch(
    "https://api.invertironline.com/api/v2/estadocuenta",
    access_token,
    "GET"
  );

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

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
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Title textTitle="Cuenta de inversión Argentina" />
        <BalanceInfo
          data={{
            totalEnPesos,
            titulosValorizados,
            disponible,
            comprometido,
            margenDescubierto,
          }}
        />
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Estadisticas", { statistics: estadisticas })
          }
          style={{ alignSelf: "flex-start" }}
        >
          <Text style={styles.buttonStyle}>Estadísticas</Text>
        </TouchableOpacity>

        <CollapseItem title="a 24hs" data={hrs24} />
        <CollapseItem title="a 48hs" data={hrs48} />
        <CollapseItem title="a 72hs" data={hrs72} />
        <CollapseItem title="a +72hs" data={masHrs72} />
        <UpdateController />
        <StatusBar />
      </ScrollView>
    );
  } else {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#4834D4",
        }}
      >
        <ActivityIndicator size={60} color="white" />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#4834D4",
  },
  buttonStyle: {
    marginLeft: 5,
    fontSize: 18,
    marginVertical: 10,
    color: "#fff",
  },
});

export default HomeScreen;
