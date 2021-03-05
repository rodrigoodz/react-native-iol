import React from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";

const BalanceInfoItem = ({ font_size, text_info, text_amount }) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text style={[styles.textStyle, { fontSize: font_size }]}>
        {text_info}
      </Text>
      {text_amount !== null ? (
        <Text style={[styles.textStyle, { fontSize: font_size }]}>
          AR$ {text_amount.toFixed(2)}
        </Text>
      ) : (
        <ActivityIndicator size="small" color="#fff" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: "rgba(255,255,255,0.8)",
    padding: 5,
    fontSize: 15,
    fontFamily: "SairaLight",
  },
});

export default BalanceInfoItem;
