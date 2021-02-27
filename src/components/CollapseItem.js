import React from "react";
import { Text } from "react-native-elements";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";
import { View } from "react-native";

const CollapseItem = ({ title }) => {
  return (
    <>
      <Collapse>
        <CollapseHeader>
          <View
            style={{
              backgroundColor: "#686DE0",
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              margin: 1,
              borderColor: "rgba(255,255,255,0.8)",
              borderRadius: 4,
            }}
          >
            <Text h4 style={{ color: "#30336B" }}>
              Saldo {title}
            </Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <View
            style={{
              backgroundColor: "rgba(255,255,255,0.3)",
              height: 80,
              justifyContent: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 40,
              }}
            >
              <Text>Saldo</Text>
              <Text>0</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 40,
              }}
            >
              <Text>Comprometido</Text>
              <Text>0</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 40,
              }}
            >
              <Text>Disponible</Text>
              <Text>0</Text>
            </View>
          </View>
        </CollapseBody>
      </Collapse>
    </>
  );
};

export default CollapseItem;
