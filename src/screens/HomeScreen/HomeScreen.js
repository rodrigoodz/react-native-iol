import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";

import Title from "../../components/Title";
import BalanceInfo from "./BalanceInfo";
import CollapseItem from "../../components/CollapseItem";
import { RefreshControl } from "react-native";
import UpdateController from "./UpdateController";

const ScreenInicio = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Title textTitle="Cuenta de inversión Argentina" />
      <BalanceInfo />
      <TouchableOpacity onPress={() => navigation.navigate("Estadisticas")}>
        <Text
          style={{
            marginLeft: 5,
            fontSize: 18,
            marginVertical: 10,
            color: "#fff",
          }}
        >
          Estadísticas
        </Text>
      </TouchableOpacity>
      <CollapseItem title="inmediato" />
      <CollapseItem title="a 24hs" />
      <CollapseItem title="a 48hs" />
      <CollapseItem title="a 72hs" />
      <CollapseItem title="a +72hs" />
      <UpdateController />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#4834D4",
  },
});

export default ScreenInicio;
