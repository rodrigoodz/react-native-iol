import React from "react";
import { StyleSheet, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

const Selector = ({ options, selected, setSelected }) => {
  return (
    <View style={styles.containerPicker}>
      <Picker
        style={styles.picker}
        itemStyle={styles.item}
        selectedValue={selected}
        onValueChange={(itemValue) => setSelected(itemValue)}
      >
        {options.map((option) => {
          return (
            <Picker.Item
              label={option.label}
              value={option.value}
              key={option.value}
            />
          );
        })}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  containerPicker: {
    borderRadius: 10,
    backgroundColor: "#131e31",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.5)",
    justifyContent: "center",
    height: 50,
  },
  picker: {
    color: "white",
  },
  item: { height: 30 },
});

export default Selector;
