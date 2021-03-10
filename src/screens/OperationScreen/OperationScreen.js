import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import { Context as AuthContext } from "../../context/AuthContext";
import { useFetch } from "../../hooks/useFetch";

import Commisions from "./Commisions";
import GradientContainer from "../../components/GradientContainer";
import InfoOperation from "./InfoOperation";
import LoadingComponent from "../../components/LoadingComponent";
import Title from "../../components/Title";
import TransactionStates from "./TransactionStates";
import { Icon } from "react-native-elements";
import { cancelOperation } from "../../api";
import AwesomeAlert from "react-native-awesome-alerts";
import GoBackButton from "../../components/GoBackButton";

const OperationScreen = ({ route, navigation }) => {
  const { numero } = route.params;
  const {
    state: { access_token },
  } = useContext(AuthContext);
  const [showAlert, setShowAlert] = useState(false);
  const [fetchResponse, setfetchResponse] = useState({ ok: "", message: "" });

  const { data } = useFetch(
    `https://api.invertironline.com/api/v2/operaciones/1?numero=${numero}`,
    access_token,
    "GET"
  );

  const handleCancelOperation = async () => {
    const response = await cancelOperation(numero, access_token);
    setfetchResponse({ ok: response.ok, message: response.message.join("\n") });
    setShowAlert(true);
  };

  if (data) {
    return (
      <View style={{ flex: 1, backgroundColor: "#131e31" }}>
        <>
          <AwesomeAlert
            show={showAlert}
            showProgress={false}
            title={!fetchResponse.ok ? "Error" : "Confirmado"}
            message={fetchResponse.message}
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={false}
            showConfirmButton={true}
            confirmText="Aceptar"
            confirmButtonColor={!fetchResponse.ok ? "#DD6B55" : "#55dd6b"}
            onConfirmPressed={() => {
              setShowAlert(false);
            }}
          />
        </>
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
        {data.estadoActual === "iniciada" ||
        data.estadoActual === "en_Proceso" ? (
          !fetchResponse.ok ? (
            <TouchableOpacity
              style={{ alignItems: "center", marginTop: 10 }}
              onPress={handleCancelOperation}
            >
              <Icon name="cancel" type="material-icons" color="red" size={25} />
              <Text style={{ color: "red", fontWeight: "bold" }}>
                Cancelar Operacion
              </Text>
            </TouchableOpacity>
          ) : null
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
