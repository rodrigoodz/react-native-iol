import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-elements";

const ButtonComponent = ({ handleButton, title }) => {
  return (
    <Button
      title={title}
      buttonStyle={styles.boton}
      onPress={handleButton}
      titleStyle={{ color: "rgba(255,255,255,0.8)" }}
    />
  );
};

const styles = StyleSheet.create({
  boton: {
    marginHorizontal: 10,
    width: 100,
    alignSelf: "center",
    backgroundColor: "rgba(106,176,76,0.8)",
    color: "red",
  },
});

export default ButtonComponent;
