import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";

import { Context as AuthContext } from "../../context/AuthContext";
import { useFetch } from "../../hooks/useFetch";

import Commisions from "./Commisions";
import GoBackButton from "../../components/GoBackButton";
import GradientContainer from "../../components/GradientContainer";
import InfoOperation from "./InfoOperation";
import LoadingComponent from "../../components/LoadingComponent";
import Title from "../../components/Title";
import TransactionStates from "./TransactionStates";
import { Icon } from "react-native-elements";
import { cancelOperation } from "../../api";

// const operation = {
//   numero: 29351319,
//   mercado: "bcba",
//   simbolo: "GGAL",
//   moneda: "peso_Argentino",
//   tipo: "compra",
//   fechaAlta: "2020-12-17T12:07:12.147",
//   validez: "2020-12-17T17:00:00",
//   fechaOperado: "2020-12-17T12:08:23",
//   estadoActual: "terminada",
//   estados: [
//     {
//       detalle: "Iniciada",
//       fecha: "2020-12-17T12:07:12.147",
//     },
//     {
//       detalle: "En Proceso",
//       fecha: "2020-12-17T12:07:14.117",
//     },
//     {
//       detalle: "Operación de 3 Título/s",
//       fecha: "2020-12-17T12:08:23",
//     },
//     {
//       detalle: "Terminada",
//       fecha: "2020-12-17T12:08:23.16",
//     },
//   ],
//   aranceles: [
//     {
//       tipo: "Derechos De Mercado",
//       neto: 0.31,
//       iva: 0.06,
//     },
//     {
//       tipo: "Comisión",
//       neto: 1.92,
//       iva: 0.4,
//     },
//   ],
//   operaciones: [
//     {
//       fecha: "2020-12-17T12:08:23",
//       cantidad: 3.0,
//       precio: 128.0,
//     },
//   ],
//   precio: 128.0,
//   cantidad: 3.0,
//   monto: 384.0,
//   modalidad: "precio_Limite",
// };

const OperationScreen = ({ route, navigation }) => {
  const { numero } = route.params;
  const {
    state: { access_token },
  } = useContext(AuthContext);

  const { data } = useFetch(
    `https://api.invertironline.com/api/v2/operaciones/1?numero=${numero}`,
    access_token,
    "GET"
  );

  const handleCancelOperation = async () => {
    const response = await cancelOperation(numero, access_token);
    ToastAndroid.showWithGravity(
      response.message[0],
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };

  if (data) {
    return (
      <View style={{ flex: 1, backgroundColor: "#131e31" }}>
        <GradientContainer
          firstColor="#2b5a7f"
          secondColor="#193952"
          padding={10}
          borderBottomLeftRadius={30}
          borderBottomRightRadius={30}
          marginBottom={20}
        >
          <Title textTitle={`Operacion N° ${numero}`} />
          <InfoOperation
            simbolo={data.simbolo}
            tipo={data.tipo}
            fechaAlta={data.fechaAlta}
            validez={data.validez}
            precio={data.precio}
            cantidad={data.cantidad}
          />
        </GradientContainer>
        <TransactionStates estados={data.estados} />
        <Commisions aranceles={data.aranceles} />
        {data.estadoActual === "iniciada" ? (
          <TouchableOpacity
            style={{ alignItems: "center", marginTop: 10 }}
            onPress={handleCancelOperation}
          >
            <Icon name="cancel" type="material-icons" color="red" size={25} />
            <Text style={{ color: "red", fontWeight: "bold" }}>
              Cancelar Operacion
            </Text>
          </TouchableOpacity>
        ) : null}
        <GoBackButton navigation={navigation} />
      </View>
    );
  } else {
    return <LoadingComponent />;
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(235,255,255,0.8)",
    padding: 10,
    marginTop: 15,
    borderRadius: 10,
  },
});

export default OperationScreen;
