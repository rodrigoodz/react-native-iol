import React from "react";
import { StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";

import Title from "../../components/Title";
import InfoSaldo from "../ScreenInicio/InfoSaldo";
import CollapseItem from "../../components/CollapseItem";

const ScreenInicio = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Title textTitle="Cuenta de inversión Argentina" />
      <InfoSaldo />
      <TouchableOpacity>
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
    margin: 10,
  },
});

export default ScreenInicio;
