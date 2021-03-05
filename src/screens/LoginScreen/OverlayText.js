import React from "react";
import { StyleSheet, Text, View, Linking, ScrollView } from "react-native";
import { Icon } from "react-native-elements";

const OverlayText = () => {
  const checkcircle = (
    <Icon
      type="ant-design"
      name="checkcircleo"
      size={18}
      style={{ marginHorizontal: 4 }}
    />
  );
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        borderWidth: 1,
      }}
    >
      <Text style={{ color: "black", fontWeight: "bold" }}>
        ¿Como Comenzar?
      </Text>
      <Text>{"     "}</Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <Text>1- Solicitá </Text>
        <Text
          style={{ color: "blue" }}
          onPress={() =>
            Linking.openURL(
              "https://www.invertironline.com/NuevaConsulta/APIs/"
            )
          }
        >
          aquí
        </Text>
        <Text> la activación de la API vinculada</Text>
      </View>
      <Text>
        a tu cuenta comitente. Sin la activacion no vas a poder usar ninguna
        funcion de la aplicacion.
      </Text>
      <Text>
        2- Ingresa tus credenciales y solicitá informacion a la API de forma
        segura.
      </Text>
      <Text>{"     "}</Text>
      <Text style={{ color: "black", fontWeight: "bold" }}>
        ¿Qué se puede hacer con la API?
      </Text>
      <Text>{"     "}</Text>
      <View>
        <View style={{ flexDirection: "row" }}>
          {checkcircle}
          <Text>Comprar/Vender activos.</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          {checkcircle}
          <Text>Obtener paneles de cotizaciones</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          {checkcircle}
          <Text>Obtener cotización por Título.</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          {checkcircle}
          <Text>Obtener estado de cuenta.</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          {checkcircle}
          <Text>Obtener portafolio.</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          {checkcircle}
          <Text>Obtener detalle de operaciones.</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          {checkcircle}
          <Text>Enviar pedidos de cancelación.</Text>
        </View>
      </View>
      <Text>{"     "}</Text>
      <Text style={{ color: "black", fontWeight: "bold" }}>
        ¿Qué costo tiene el uso de la API?
      </Text>
      <Text>{"     "}</Text>
      <Text>
        En caso de hacer uso de APIs la misma estará bonificada hasta una
        cantidad de 25.000 API Calls en el mes. Luego de eso, el costo será de
        AR$ 500 + IVA que se cobrarán de la cuenta comitente a la vez que se
        cargarán bonificaciones por el mismo monto a cuenta de comisiones por
        transacciones durante los siguientes 30 días.
      </Text>
      <Text>{"     "}</Text>
      <Text style={{ color: "black", fontWeight: "bold" }}>
        Descargo de Responsabilidad
      </Text>
      <Text>{"     "}</Text>
      <Text>
        No soy responsable de ningun daño, de ninguna manera, al usar esta
        aplicacion. No estoy dando ningun consejo de inversion, todo lo que ven
        es un proyecto personal y no tiene relacion con la empresa
      </Text>
    </ScrollView>
  );
};

export default OverlayText;

const styles = StyleSheet.create({});
