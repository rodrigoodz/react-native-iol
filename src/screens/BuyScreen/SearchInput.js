import React from "react";
import { StyleSheet, TextInput } from "react-native";

const SearchInput = ({ tickerName, setTickerName, onSubmitEditing }) => {
  return (
    <TextInput
      placeholder="Ingresar ticker"
      autoCapitalize="none"
      autoCorrect={false}
      style={{
        backgroundColor: "white",
        height: 40,
        flex: 1,
        borderRadius: 10,
        paddingLeft: 15,
      }}
      value={tickerName}
      onChangeText={setTickerName}
      onSubmitEditing={onSubmitEditing}
    />
  );
};

export default SearchInput;

const styles = StyleSheet.create({});
