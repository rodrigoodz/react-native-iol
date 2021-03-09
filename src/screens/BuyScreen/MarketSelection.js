import React from "react";
import { StyleSheet } from "react-native";
import { ButtonGroup } from "react-native-elements";

const MarketSelection = ({ country, setMarket }) => {
  return (
    <ButtonGroup
      onPress={setMarket}
      containerStyle={{ height: 20 }}
      selectedIndex={country}
      buttons={["BCBA", "NYSE", "NASDAQ"]}
      containerStyle={{
        height: 40,
        backgroundColor: "#131e31",
        borderRadius: 10,
        marginTop: 15,
      }}
      selectedButtonStyle={{
        backgroundColor: "#212f49",
      }}
      textStyle={{
        fontFamily: "SairaThin",
      }}
    />
  );
};

export default MarketSelection;

const styles = StyleSheet.create({});
