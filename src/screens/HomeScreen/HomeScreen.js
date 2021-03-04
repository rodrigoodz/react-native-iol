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
import GradientContainer from "../../components/GradientContainer";

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

  // const data = {
  //   cuentas: [
  //     {
  //       numero: "200003",
  //       tipo: "inversion_Argentina_Pesos",
  //       moneda: "peso_Argentino",
  //       disponible: 404.64,
  //       comprometido: 0.0,
  //       saldo: 404.64,
  //       titulosValorizados: 572.5,
  //       total: 977.14,
  //       margenDescubierto: 0.0,
  //       saldos: [
  //         {
  //           liquidacion: "inmediato",
  //           saldo: 404.64,
  //           comprometido: 0.0,
  //           disponible: 404.64,
  //           disponibleOperar: 404.64,
  //         },
  //         {
  //           liquidacion: "hrs24",
  //           saldo: 0.0,
  //           comprometido: 0.0,
  //           disponible: 0.0,
  //           disponibleOperar: 404.64,
  //         },
  //         {
  //           liquidacion: "hrs48",
  //           saldo: 0.0,
  //           comprometido: 0.0,
  //           disponible: 0.0,
  //           disponibleOperar: 404.64,
  //         },
  //         {
  //           liquidacion: "hrs72",
  //           saldo: 0.0,
  //           comprometido: 0.0,
  //           disponible: 0.0,
  //           disponibleOperar: 404.64,
  //         },
  //         {
  //           liquidacion: "masHrs72",
  //           saldo: 0.0,
  //           comprometido: 0.0,
  //           disponible: 0.0,
  //           disponibleOperar: 0.0,
  //         },
  //       ],
  //       estado: "operable",
  //     },
  //     {
  //       numero: "200003",
  //       tipo: "inversion_Argentina_Dolares",
  //       moneda: "dolar_Estadounidense",
  //       disponible: 0.0,
  //       comprometido: 0.0,
  //       saldo: 0.0,
  //       titulosValorizados: 0.0,
  //       total: 0.0,
  //       margenDescubierto: 0.0,
  //       saldos: [
  //         {
  //           liquidacion: "inmediato",
  //           saldo: 0.0,
  //           comprometido: 0.0,
  //           disponible: 0.0,
  //           disponibleOperar: 0.0,
  //         },
  //         {
  //           liquidacion: "hrs24",
  //           saldo: 0.0,
  //           comprometido: 0.0,
  //           disponible: 0.0,
  //           disponibleOperar: 0.0,
  //         },
  //         {
  //           liquidacion: "hrs48",
  //           saldo: 0.0,
  //           comprometido: 0.0,
  //           disponible: 0.0,
  //           disponibleOperar: 0.0,
  //         },
  //         {
  //           liquidacion: "hrs72",
  //           saldo: 0.0,
  //           comprometido: 0.0,
  //           disponible: 0.0,
  //           disponibleOperar: 0.0,
  //         },
  //         {
  //           liquidacion: "masHrs72",
  //           saldo: 0.0,
  //           comprometido: 0.0,
  //           disponible: 0.0,
  //           disponibleOperar: 0.0,
  //         },
  //       ],
  //       estado: "operable",
  //     },
  //   ],
  //   estadisticas: [
  //     {
  //       descripcion: "Anterior",
  //       cantidad: 0,
  //       volumen: 0.0,
  //     },
  //     {
  //       descripcion: "Actual",
  //       cantidad: 0,
  //       volumen: 0.0,
  //     },
  //   ],
  //   totalEnPesos: 977.14,
  // };

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
        </GradientContainer>

        <View style={{ marginHorizontal: 15 }}>
          <CollapseItem title="a 24hs" data={hrs24} />
          <CollapseItem title="a 48hs" data={hrs48} />
          <CollapseItem title="a 72hs" data={hrs72} />
          <CollapseItem title="a +72hs" data={masHrs72} />
        </View>
        {/* <UpdateController /> */}
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
          backgroundColor: "#646ecb",
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
    backgroundColor: "#131e31",
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
