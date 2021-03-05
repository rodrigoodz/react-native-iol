import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FourColumnItem = ({ firstText, secondText, thirdText, fourthText }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor:
          Number(thirdText.replace("%", "")) < 0
            ? "rgba(235,77,75,0.7)"
            : "rgba(106,176,76,0.7)",
        height: 50,
        alignItems: "center",
        marginVertical: 5,
        borderRadius: 5,
        overflow: "hidden",
      }}
    >
      <View style={styles.column}>
        <Text style={styles.text}>{firstText}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.text}>{secondText}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.text}>{thirdText}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.text}>{fourthText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: { fontFamily: "SairaLight" },
  column: { flex: 1, alignItems: "center" },
});

export default FourColumnItem;
