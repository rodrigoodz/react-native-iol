import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Input } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import ButtonComponent from "../components/ButtonComponent";

const ScreenLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.length === 0 || password.length === 0) {
      return setError(true);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#4834D4" }}>
      <Text style={styles.title} h2>
        Ingresá tus datos
      </Text>
      <View style={styles.formContainer}>
        <Input
          autoCapitalize={"none"}
          autoCorrect={false}
          label="Usuario o email"
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
    backgroundColor: "#686DE0",
    borderRadius: 4,
    borderWidth: 2,
  },
});

export default ScreenLogin;
