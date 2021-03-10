import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";

const TokenRequestScreen = () => {
  const { tryLocalSignIn } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignIn();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Solicitando un nuevo token de acceso</Text>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
};

export default TokenRequestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131e31",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    padding: 15,
    fontSize: 18,
  },
});
