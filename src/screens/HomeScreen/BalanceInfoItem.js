import React from "react";
import { Text, View } from "react-native";

const BalanceInfoItem = ({ font_size, text_info, text_amount }) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text
        style={{
          color: "rgba(255,255,255,0.8)",
          fontSize: font_size,
          padding: 5,
          fontSize: 15,
          fontFamily: "SairaLight",
        }}
      >
        {text_info}
      </Text>
      <Text
        style={{
          color: "rgba(255,255,255,0.8)",
          fontSize: font_size,
          padding: 5,
          fontSize: 15,
          fontFamily: "SairaLight",
        }}
      >
        {text_amount}
      </Text>
    </View>
  );
};

export default BalanceInfoItem;
