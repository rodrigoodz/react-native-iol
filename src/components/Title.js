import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Divider } from "react-native-elements";

const Title = ({ textTitle }) => {
  return (
    <View>
      <Text style={styles.title} h4>
        {textTitle}
      </Text>

      <Divider
        style={{ color: "rgba(255,255,255,0.8)", marginHorizontal: 10 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "rgba(255,255,255,0.8)",
    alignSelf: "center",
    marginVertical: 10,
  },
});

export default Title;
