import React from "react";
import { View } from "react-native";
import BalanceInfoItem from "./BalanceInfoItem";
import Spacer from "../../components/Spacer";

const BalanceInfo = ({
  data: {
    totalEnPesos,
    titulosValorizados,
    disponible,
    comprometido,
    margenDescubierto,
  },
}) => {
  return (
    <View>
      <BalanceInfoItem
        font_size={22}
        text_info="Saldo total"
        text_amount={`AR$ ${totalEnPesos.toFixed(2)}`}
      />
      <BalanceInfoItem
        font_size={14}
        text_info="Titulos valorizados Pesos"
        text_amount={`AR$ ${titulosValorizados.toFixed(2)}`}
      />
      {/* <BalanceInfoItem
        font_size={14}
        text_info="Total ganancia-perdida Pesos"
        text_amount={`AR$ +12312,80`}
      /> */}
      {/* <BalanceInfoItem
        font_size={14}
        text_info="Activos valorizados Dólares"
        text_amount={`US$ ${activosDolares}`}
      /> */}
      {/* <BalanceInfoItem
        font_size={14}
        text_info="Total ganancia-perdida Dólares"
        text_amount="US$ 0,00"
      /> */}
      <Spacer />
      <BalanceInfoItem
        font_size={14}
        text_info="Disponible para Operar"
        text_amount={`AR$ ${disponible.toFixed(2)}`}
      />
      <BalanceInfoItem
        font_size={14}
        text_info="Comprometido"
        text_amount={`AR$ ${comprometido.toFixed(2)}`}
      />
      <BalanceInfoItem
        font_size={14}
        text_info="Margen Descubierto"
        text_amount={`AR$ ${margenDescubierto.toFixed(2)}`}
      />
    </View>
  );
};

export default BalanceInfo;
