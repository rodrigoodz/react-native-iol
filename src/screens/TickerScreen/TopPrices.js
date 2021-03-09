import React, { useContext } from "react";
import { Icon } from "react-native-elements";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { Context as AuthContext } from "../../context/AuthContext";
import { useFetch } from "../../hooks/useFetch";

import GradientContainer from "../../components/GradientContainer";
import TwoColumnHeader from "../../components/TwoColumnHeader";
import TwoColumnItem from "../../components/TwoColumnItem";

const TopPrices = ({ ticker }) => {
  const {
    state: { access_token },
  } = useContext(AuthContext);

  //TODO a futuro podria implementar para que al tocar algun icono traiga la info actualizada, pero 'gastaria' una llamada a la API por info que ya traigo por parametros con react navigation
  //   const { data } = useFetch(
  //     `https://api.invertironline.com/api/v2/${ticker.mercado}/Titulos/${ticker.simbolo}/Cotizacion`,
  //     access_token,
  //     "GET"
  //   );
  //   console.log(data);

  return (
    <GradientContainer
      firstColor="#132b38"
      secondColor="#050f17"
      padding={10}
      borderRadius={20}
      marginHorizontal={15}
    >
      <Text
        style={{
          color: "white",
          alignSelf: "center",
          fontFamily: "SairaSemiBold",
          fontSize: 18,
        }}
      >
        Caja de Puntas
      </Text>
      <TwoColumnHeader firstTitle="Compra" secondTitle="Venta" />
      {ticker.puntas !== null ? (
        <TwoColumnItem
          firstText={`${
            ticker.puntas.cantidadCompra
          } x $${ticker.puntas.precioVenta.toFixed(2)}`}
          secondText={`${
            ticker.puntas.cantidadVenta
          } x $${ticker.puntas.precioVenta.toFixed(2)}`}
          alignFirstColumn="center"
          alignSecondColumn="center"
        />
      ) : (
        <Text style={{ color: "rgba(255,0,0,.8)", marginHorizontal: 15 }}>
          Actualmente no hay informacion de las puntas de compra y venta
        </Text>
      )}

      {/* {!data ? (
        <TouchableOpacity
          style={{
            alignItems: "center",
            borderWidth: 1,
          }}
        >
          <Icon
            name="dots-three-vertical"
            type="entypo"
            color="white"
            size={10}
          />
          <Text style={{ color: "rgba(255,255,255,.7)" }}>Ver mas</Text>
        </TouchableOpacity>
      ) : null} */}
    </GradientContainer>
  );
};

export default TopPrices;

const styles = StyleSheet.create({});
