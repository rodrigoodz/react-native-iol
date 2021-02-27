import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BalanceInfoItem from "./BalanceInfoItem";
import Spacer from "../../components/Spacer";

const BalanceInfo = () => {
  return (
    <View>
      <BalanceInfoItem
        font_size={22}
        text_info="Saldo total"
        text_amount="AR$ 123959,52"
      />
      <BalanceInfoItem
        font_size={14}
        text_info="Activos valorizados Pesos"
        text_amount="AR$ 1959,62"
      />
      <BalanceInfoItem
        font_size={14}
        text_info="Total ganancia-perdida Pesos"
        text_amount="AR$ +12312,80"
      />
      <BalanceInfoItem
        font_size={14}
        text_info="Activos valorizados Dólares"
        text_amount="US$ 0,00"
      />
      <BalanceInfoItem
        font_size={14}
        text_info="Total ganancia-perdida Dólares"
        text_amount="US$ 0,00"
      />
      <Spacer />
      <BalanceInfoItem
        font_size={14}
        text_info="Disponible para Operar"
        text_amount="AR$ 396,37"
      />
      <BalanceInfoItem
        font_size={14}
        text_info="Comprometido"
        text_amount="AR$ 0,00"
      />
      <BalanceInfoItem
        font_size={14}
        text_info="Margen Descubierto"
        text_amount="AR$ 0,00"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default BalanceInfo;
