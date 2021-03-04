import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FiveColumnItem = ({
  firstText,
  secondText,
  thirdText,
  fourthText,
  fifthText,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        height: 40,
        alignItems: "center",
        backgroundColor: "#132b38",
        marginVertical: 5,
        borderRadius: 5,
      }}
    >
      <View style={{ flex: 1, alignItems: "flex-start" }}>
        <Text style={styles.text}>{firstText}</Text>
      </View>
      <View style={{ flex: 1, alignItems: "flex-start" }}>
        <Text style={styles.text}>{secondText}</Text>
      </View>
      <View style={{ flex: 1, alignItems: "flex-start" }}>
        <Text style={styles.text}>{thirdText}</Text>
      </View>
      <View style={{ flex: 1, alignItems: "flex-start" }}>
        <Text style={styles.text}>{fourthText}</Text>
      </View>
      <View style={{ flex: 1, alignItems: "flex-start" }}>
        <Text style={styles.text}>{fifthText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: { color: "white", fontFamily: "SairaThin", fontSize: 12 },
});

export default FiveColumnItem;
