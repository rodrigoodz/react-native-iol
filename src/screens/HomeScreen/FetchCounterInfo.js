import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Context as FetchContext } from "../../context/FetchContext";

const FetchCounterInfo = ({ navigation }) => {
  const {
    state: { fetchCounter },
  } = useContext(FetchContext);

  return (
    <View style={styles.fetchCounterContainer}>
      <Text style={styles.title}>
        Cant. solicitudes a la API: {fetchCounter}
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("FetchInfo")}>
        <Text style={styles.subtitle}>Ver Detalle</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  fetchCounterContainer: {
    height: 50,
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  title: { color: "white", fontSize: 16 },
  subtitle: { color: "rgba(255,255,255,.5)", fontSize: 14, paddingVertical: 5 },
});

export default FetchCounterInfo;
