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
        height: 50,
        alignItems: "center",
        marginVertical: 5,
        borderRadius: 5,
      }}
    >
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={styles.text}>{firstText}</Text>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={styles.text}>{secondText}</Text>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={styles.text}>{thirdText}</Text>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={styles.text}>{fourthText}</Text>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={styles.text}>{fifthText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({ text: { fontSize: 12 } });

export default FiveColumnItem;
