import React from "react";
import { StyleSheet, View } from "react-native";
import { CheckBox } from "react-native-elements";

const SelectOperationStatus = ({ selection, setSelection }) => {
  return (
    <View style={styles.container}>
      <CheckBox
        title="Todas"
        checked={selection === "todas"}
        key={"todas"}
        textStyle={styles.textStyle}
        checkedColor="rgba(255,255,255,0.5)"
        containerStyle={styles.checkboxContainer}
        onPress={() => setSelection("todas")}
      />
      <CheckBox
        title="Pendientes"
        checked={selection === "pendientes"}
        key={"pendientes"}
        textStyle={styles.textStyle}
        checkedColor="rgba(255,255,255,0.5)"
        containerStyle={styles.checkboxContainer}
        onPress={() => setSelection("pendientes")}
      />
      <CheckBox
        title="Canceladas"
        checked={selection === "canceladas"}
        key={"canceladas"}
        textStyle={styles.textStyle}
        checkedColor="rgba(255,255,255,0.5)"
        containerStyle={styles.checkboxContainer}
        onPress={() => setSelection("canceladas")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 6 },
  checkboxContainer: {
    backgroundColor: "#131e31",
    padding: 12,
    borderRadius: 10,
    borderColor: "rgba(255,255,255,0.5)",
  },
  textStyle: {
    color: "white",
  },
});

export default SelectOperationStatus;
