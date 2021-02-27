import React from "react";
import { StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";

import Title from "../../components/Title";
import InfoSaldo from "./InfoSaldo";
import CollapseItem from "../../components/CollapseItem";

const ScreenInicio = ({ navigation }) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Title textTitle="Cuenta de inversión Argentina" />
      <InfoSaldo />
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
