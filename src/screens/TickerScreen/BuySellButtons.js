import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { navigate } from "../../../RootNavigation";
import marketToIndex from "../../helpers/marketToIndex";

const BuySellButtons = ({ asset, market }) => {
  const formattedMarket = marketToIndex(market);
  console.log("market", market);
  console.log("aaset", asset);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.TouchableOpacityStyles, { backgroundColor: "#DD6B55" }]}
        onPress={() =>
          navigate("Operar", {
            screen: "ComprarVender",
            params: {
              text: "Comprar",
              assetParam: asset,
              marketParam: formattedMarket,
            },
          })
        }
      >
        <Text style={styles.buttonText}>Comprar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.TouchableOpacityStyles,
          ,
          { backgroundColor: "#55dd6b" },
        ]}
        onPress={() =>
          navigate("Operar", {
            screen: "ComprarVender",
            params: {
              text: "Vender",
              assetParam: asset,
              marketParam: formattedMarket,
            },
          })
        }
      >
        <Text style={styles.buttonText}>Vender</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 15,
  },
  buttonText: {
    color: "white",
    fontFamily: "SairaSemiBold",
    fontSize: 22,
  },
  TouchableOpacityStyles: {
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
});

export default BuySellButtons;
