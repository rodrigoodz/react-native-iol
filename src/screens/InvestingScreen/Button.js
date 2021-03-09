import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { navigate } from "../../../RootNavigation";

const Button = ({ text }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#1c3f5b",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
        borderRadius: 8,
        marginHorizontal: 20,
      }}
      onPress={() => navigate(`${text}`)}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  text: {
    color: "#0091c8",
    fontSize: 18,
    fontFamily: "SairaSemiBold",
  },
});
