import React from "react";
import { StyleSheet, Text, View } from "react-native";
import GoBackButton from "../../components/GoBackButton";

const BuyScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#131e31" }}>
      <Text>BuyScreen</Text>
      <GoBackButton navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default BuyScreen;
