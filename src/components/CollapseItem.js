import React from "react";
import { Text } from "react-native-elements";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";
import { StyleSheet, View } from "react-native";

const CollapseItem = ({ title, data: { comprometido, disponible, saldo } }) => {
  return (
    <>
      <Collapse>
        <CollapseHeader>
          <View style={styles.header}>
            <Text h4 style={{ color: "#30336B" }}>
              Saldo {title}
            </Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <View style={styles.column}>
            <View style={styles.row}>
              <Text>Saldo</Text>
              <Text>{`AR$ ${saldo.toFixed(2)}`}</Text>
            </View>
            <View style={styles.row}>
              <Text>Comprometido</Text>
              <Text>{`AR$ ${comprometido.toFixed(2)}`}</Text>
            </View>
            <View style={styles.row}>
              <Text>Disponible</Text>
              <Text>{`AR$ ${disponible.toFixed(2)}`}</Text>
            </View>
          </View>
        </CollapseBody>
      </Collapse>
    </>
  );
};

export default CollapseItem;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#686DE0",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    margin: 1,
    borderColor: "rgba(255,255,255,0.8)",
    borderRadius: 4,
  },
  column: {
    backgroundColor: "rgba(255,255,255,0.3)",
    height: 80,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 40,
  },
});
