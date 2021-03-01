import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

const GoBackButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.buttonStyle}
      onPress={() => navigation.goBack()}
    >
      <Icon
        name="arrow-back-outline"
        type="ionicon"
        color="white"
        size={25}
        style={styles.iconStyle}
      />
      <Text style={styles.textStyle}>Volver</Text>
    </TouchableOpacity>
  );
};

export default GoBackButton;

const styles = StyleSheet.create({
  buttonStyle: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 15,
    alignItems: "center",
    marginTop: 30,
  },
  iconStyle: { marginTop: 2 },
  textStyle: { color: "white", fontSize: 20 },
});
