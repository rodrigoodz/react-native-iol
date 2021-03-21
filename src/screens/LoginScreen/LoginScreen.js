import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Text, Input, Overlay, Button } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";

import { Context as AuthContext } from "../../context/AuthContext";
import { Context as FetchContext } from "../../context/FetchContext";

import ButtonComponent from "../../components/ButtonComponent";
import OverlayText from "./OverlayText";

const ScreenLogin = () => {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const { setFetchCounter } = useContext(FetchContext);
  const {
    state: { errorMessage },
    startSignIn,
    tryLocalSignIn,
  } = useContext(AuthContext);

  useEffect(() => {
    setFetchCounter();
    tryLocalSignIn();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.length === 0 || password.length === 0) {
      return setError(true);
    }
    setError(false);
    startSignIn({ email, password });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#131e31" }}>
      <Text style={styles.title} h2>
        Ingresá tus datos
      </Text>
      <View style={styles.formContainer}>
        <Input
          autoCapitalize={"none"}
          autoCorrect={false}
          label="Usuario o email"
          style={{ color: "black" }}
          inputContainerStyle={styles.input}
          placeholder="Ingresá tu usuario o mail"
          leftIcon={
            <MaterialIcons
              name="email"
              size={24}
              color="rgba(255,255,255,0.5)"
              style={{ marginLeft: 5 }}
            />
          }
          rightIcon={
            error ? (
              <MaterialIcons name="error" size={24} color="rgba(255,0,0,.6)" />
            ) : null
          }
          errorStyle={{ color: "rgba(255,0,0,.8)" }}
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <Input
          autoCapitalize={"none"}
          autoCorrect={false}
          secureTextEntry
          label="Contraseña"
          style={{ color: "black" }}
          inputContainerStyle={styles.input}
          placeholder="Ingresá tu contraseña"
          leftIcon={
            <MaterialIcons
              name="lock"
              size={24}
              color="rgba(255,255,255,0.5)"
              style={{ marginLeft: 5 }}
            />
          }
          rightIcon={
            error ? (
              <MaterialIcons name="error" size={24} color="rgba(255,0,0,.6)" />
            ) : null
          }
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
        <ButtonComponent handleButton={handleSubmit} title="Ingresar" />
        {errorMessage.length < 0 ? null : (
          <Text style={{ fontSize: 28, color: "red" }}>{errorMessage}</Text>
        )}
        <View
          style={{
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <TouchableOpacity
            title="Open Overlay"
            onPress={() => setVisible(!visible)}
          >
            <Text style={{ color: "green", fontSize: 20 }}>¿Cómo empezar?</Text>
          </TouchableOpacity>
          <Overlay
            isVisible={visible}
            backdropStyle={{ backgroundColor: "rgba(0,0,0,.6)" }}
            overlayStyle={{
              backgroundColor: "rgba(255,255,255,0.9)",
            }}
            onBackdropPress={() => setVisible(!visible)}
          >
            <View
              style={{ alignItems: "center", marginVertical: 20, padding: 10 }}
            >
              <OverlayText />
              <Button
                title="Aceptar"
                buttonStyle={{
                  backgroundColor: "black",
                  width: 120,
                  marginVertical: 15,
                }}
                onPress={() => setVisible(!visible)}
              />
            </View>
          </Overlay>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: { flex: 1, justifyContent: "center", margin: 10 },
  title: {
    color: "rgba(255,255,255,0.8)",
    alignSelf: "center",
    marginTop: 30,
  },
  input: {
    backgroundColor: "#rgba(255,255,255,0.2)",
    borderRadius: 10,
    borderWidth: 1,
  },
});

export default ScreenLogin;
