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
        checkedColor="green"
        containerStyle={styles.checkboxContainer}
        onPress={() => setSelection("todas")}
      />
      <CheckBox
        title="Pendientes"
        checked={selection === "pendientes"}
        key={"pendientes"}
        checkedColor="green"
        containerStyle={styles.checkboxContainer}
        onPress={() => setSelection("pendientes")}
      />
      <CheckBox
        title="Finalizadas"
        checked={selection === "finalizadas"}
        key={"finalizadas"}
        checkedColor="green"
        containerStyle={styles.checkboxContainer}
        onPress={() => setSelection("finalizadas")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 6 },
  checkboxContainer: {
    backgroundColor: "rgba(255,255,255,0.5)",
    padding: 12,
    borderRadius: 10,
  },
});

export default SelectOperationStatus;
