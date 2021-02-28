import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CommissionsHeader from "./CommissionsHeader";
import CommissionsItem from "./CommissionsItem";

const Commisions = ({ aranceles }) => {
  return (
    <View>
      <Text style={{ color: "white", alignSelf: "center", marginTop: 30 }}>
        Comisiones
      </Text>
      <View style={styles.container}>
        <CommissionsHeader />

        {aranceles.map((arancel) => {
          return (
            <CommissionsItem
              iva={arancel.iva}
              neto={arancel.neto}
              tipo={arancel.tipo}
              key={arancel.tipo}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(235,255,255,0.8)",
    padding: 10,
    borderRadius: 10,
  },
});

export default Commisions;
