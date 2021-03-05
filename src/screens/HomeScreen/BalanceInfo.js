import React from "react";
import { View } from "react-native";
import BalanceInfoItem from "./BalanceInfoItem";
import Spacer from "../../components/Spacer";

const BalanceInfo = ({
  totalEnPesos = null,
  titulosValorizados = null,
  disponible = null,
  comprometido = null,
  margenDescubierto = null,
}) => {
  return (
    <View>
      <BalanceInfoItem
        font_size={22}
        text_info="Saldo total"
        text_amount={totalEnPesos}
      />
      <BalanceInfoItem
        font_size={14}
        text_info="Titulos valorizados Pesos"
        text_amount={titulosValorizados}
      />
      <Spacer />
      <BalanceInfoItem
        font_size={14}
        text_info="Disponible para Operar"
        text_amount={disponible}
      />
      <BalanceInfoItem
        font_size={14}
        text_info="Comprometido"
        text_amount={comprometido}
      />
      <BalanceInfoItem
        font_size={14}
        text_info="Margen Descubierto"
        text_amount={margenDescubierto}
      />
    </View>
  );
};

export default BalanceInfo;
