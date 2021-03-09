import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

const SearchButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "rgba(255,255,255,.1)",
        padding: 10,
        borderRadius: 20,
        marginHorizontal: 5,
      }}
      onPress={onPress}
    >
      <Icon
        type="ant-design"
        name="search1"
        size={24}
        color="white"
        style={{}}
      />
    </TouchableOpacity>
  );
};

export default SearchButton;

const styles = StyleSheet.create({});
