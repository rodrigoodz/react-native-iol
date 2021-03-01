import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ThreeColumnHeader from "../../components/ThreeColumnHeader";
import ThreeColumnItem from "../../components/ThreeColumnItem";

const Commisions = ({ aranceles }) => {
  return (
    <View>
      <Text style={{ color: "white", alignSelf: "center", marginTop: 30 }}>
        Comisiones
      </Text>
      <View style={styles.container}>
        <ThreeColumnHeader
          firstTitle="Arancel"
          secondTitle="Impuesto Neto"
          thirdTitle="Impuesto IVA"
        />

        {aranceles.map((arancel) => {
          return (
            <ThreeColumnItem
              firstText={`${arancel.tipo}`}
              secondText={`$${arancel.neto.toFixed(2)}`}
              thirdText={`$${arancel.iva.toFixed(2)}`}
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
