import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

const PickerComponent = ({ country, setCountry }) => {
  return (
    <View style={styles.containerPicker}>
      <Picker
        style={styles.picker}
        selectedValue={country}
        onValueChange={(itemValue) => setCountry(itemValue)}
      >
        <Picker.Item label="Argentina" value="argentina" />
        <Picker.Item label="Estados Unidos" value="estados_unidos" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  containerPicker: {
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.5)",
  },
  picker: {
    color: "#30336B",
  },
});

export default PickerComponent;
