import React from "react";
import { Text } from "react-native-elements";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import GradientContainer from "./GradientContainer";

const CollapseItem = ({
  title = "",
  comprometido = null,
  disponible = null,
  saldo = null,
}) => {
  return (
    <>
      <Collapse>
        <CollapseHeader>
          <View style={styles.header}>
            <Text
              style={{
                color: "#0091c8",
                fontSize: 18,
                fontFamily: "SairaSemiBold",
              }}
            >
              Saldo {title}
            </Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <GradientContainer
            firstColor="#132b38"
            secondColor="#050f17"
            margin={2}
            marginHorizontal={5}
            padding={2}
            borderRadius={0}
          >
            <View style={styles.column}>
              <View style={styles.row}>
                <Text style={styles.rowText}>Saldo</Text>
                {saldo !== null ? (
                  <Text style={styles.rowText}>{`AR$ ${saldo.toFixed(
                    2
                  )}`}</Text>
                ) : (
                  <ActivityIndicator size="small" color="#fff" />
                )}
              </View>
              <View style={styles.row}>
                <Text style={styles.rowText}>Comprometido</Text>
                {comprometido !== null ? (
                  <Text style={styles.rowText}>{`AR$ ${comprometido.toFixed(
                    2
                  )}`}</Text>
                ) : (
                  <ActivityIndicator size="small" color="#fff" />
                )}
              </View>
              <View style={styles.row}>
                <Text style={styles.rowText}>Disponible</Text>
                {disponible !== null ? (
                  <Text style={styles.rowText}>{`AR$ ${disponible.toFixed(
                    2
                  )}`}</Text>
                ) : (
                  <ActivityIndicator size="small" color="#fff" />
                )}
              </View>
            </View>
          </GradientContainer>
        </CollapseBody>
      </Collapse>
    </>
  );
};

export default CollapseItem;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#1c3f5b",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: 1,
    borderRadius: 8,
  },
  column: {
    // backgroundColor: "#1c3f5b",
    // height: 80,
    // justifyContent: "center",
    // marginHorizontal: 3,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 40,
  },
  rowText: {
    color: "white",
    fontFamily: "SairaThin",
  },
});
