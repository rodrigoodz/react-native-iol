import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ActivoItem = () => {
  return (
    <TouchableOpacity>
      <View
        style={{
          height: 80,
          flexDirection: "row",
          backgroundColor: "rgba(235,77,75,0.8)",
          borderRadius: 10,
          alignItems: "center",
        }}
      >
        <View
          style={{
            flex: 1,
            alignSelf: "stretch",
            justifyContent: "center",
            marginLeft: 20,
          }}
        >
          <Text style={{ fontWeight: "bold", color: "black" }}>GGAL</Text>
          <Text style={{ color: "black" }}>Ult. Precio</Text>
          <Text style={{ color: "black" }}>PPC</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignSelf: "stretch",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontWeight: "bold", color: "black" }}>5/0</Text>
          <Text style={{ color: "black" }}>$112,250</Text>
          <Text style={{ color: "black" }}>$126,36</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignSelf: "stretch",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontWeight: "bold", color: "black" }}>Total</Text>
          <Text style={{ color: "black" }}>Var. Diaria</Text>
          <Text style={{ color: "black" }}>Gan-Perd:</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignSelf: "stretch",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontWeight: "bold", color: "black" }}>$561,25</Text>
          <Text style={{ color: "black" }}>-2,720%</Text>
          <Text style={{ color: "black" }}>-11,17% </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default ActivoItem;
