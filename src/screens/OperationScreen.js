import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";

const OperationScreen = ({ route }) => {
  const { nro } = route.params;

  return (
    <View style={{ flex: 1, padding: 10, backgroundColor: "#4834D4" }}>
      <Title textTitle={`Operacion N° ${nro}`} />
    </View>
  );
};

export default OperationScreen;

const styles = StyleSheet.create({});
