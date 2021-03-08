import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Context as FetchContext } from "../../context/FetchContext";

const FetchCounterInfo = () => {
  const {
    state: { fetchCounter },
  } = useContext(FetchContext);

  return (
    <View style={styles.fetchCounterContainer}>
      <Text style={{ color: "white", fontSize: 16 }}>
        Cant. solicitudes a la API: {fetchCounter}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  fetchCounterContainer: {
    height: 50,
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
});

export default FetchCounterInfo;
