import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import Constants from "expo-constants";

import Title from "../../components/Title";
import BalanceInfo from "./BalanceInfo";
import CollapseItem from "../../components/CollapseItem";
import { RefreshControl } from "react-native";
import UpdateController from "./UpdateController";

const data = {
  cuentas: [
    {
      numero: "200003",
      tipo: "inversion_Argentina_Pesos",
      moneda: "peso_Argentino",
      disponible: 404.64,
      comprometido: 0.0,
      saldo: 404.64,
      titulosValorizados: 563.25,
      total: 967.89,
      margenDescubierto: 0.0,
      saldos: [
        {
          liquidacion: "inmediato",
          saldo: 404.64,
          comprometido: 0.0,
          disponible: 404.64,
          disponibleOperar: 404.64,
        },
        {
          liquidacion: "hrs24",
          saldo: 0.0,
          comprometido: 0.0,
          disponible: 0.0,
          disponibleOperar: 404.64,
        },
        {
          liquidacion: "hrs48",
          saldo: 0.0,
          comprometido: 0.0,
          disponible: 0.0,
          disponibleOperar: 404.64,
        },
        {
          liquidacion: "hrs72",
          saldo: 0.0,
          comprometido: 0.0,
          disponible: 0.0,
          disponibleOperar: 404.64,
        },
        {
          liquidacion: "masHrs72",
          saldo: 0.0,
          comprometido: 0.0,
          disponible: 0.0,
          disponibleOperar: 0.0,
        },
      ],
      estado: "operable",
    },
    {
      numero: "200003",
      tipo: "inversion_Argentina_Dolares",
      moneda: "dolar_Estadounidense",
      disponible: 0.0,
      comprometido: 0.0,
      saldo: 0.0,
      titulosValorizados: 0.0,
      total: 0.0,
      margenDescubierto: 0.0,
      saldos: [
        {
          liquidacion: "inmediato",
          saldo: 0.0,
          comprometido: 0.0,
          disponible: 0.0,
          disponibleOperar: 0.0,
        },
        {
          liquidacion: "hrs24",
          saldo: 0.0,
          comprometido: 0.0,
          disponible: 0.0,
          disponibleOperar: 0.0,
        },
        {
          liquidacion: "hrs48",
          saldo: 0.0,
          comprometido: 0.0,
          disponible: 0.0,
          disponibleOperar: 0.0,
        },
        {
          liquidacion: "hrs72",
          saldo: 0.0,
          comprometido: 0.0,
          disponible: 0.0,
          disponibleOperar: 0.0,
        },
        {
          liquidacion: "masHrs72",
          saldo: 0.0,
          comprometido: 0.0,
          disponible: 0.0,
          disponibleOperar: 0.0,
        },
      ],
      estado: "operable",
    },
  ],
  estadisticas: [
    {
      descripcion: "Anterior",
      cantidad: 0,
      volumen: 0.0,
    },
    {
      descripcion: "Actual",
      cantidad: 0,
      volumen: 0.0,
    },
  ],
  totalEnPesos: 967.89,
};

const ScreenInicio = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

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

export default ScreenInicio;
