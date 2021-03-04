import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";

const GradientContainer = ({
  children,
  firstColor,
  secondColor,
  padding,
  borderRadius,
  marginHorizontal = 0,
  marginVertical = 0,
  borderBottomLeftRadius = 0,
  borderBottomRightRadius = 0,
  marginBottom = 0,
}) => {
  return (
    <View
      style={{
        overflow: "hidden",
        borderBottomLeftRadius,
        borderBottomRightRadius,
        marginBottom,
      }}
    >
      <LinearGradient
        colors={[firstColor, secondColor]}
        style={{
          padding,
          borderRadius,
          marginHorizontal,
          marginVertical,
        }}
      >
        {children}
      </LinearGradient>
    </View>
  );
};

export default GradientContainer;
