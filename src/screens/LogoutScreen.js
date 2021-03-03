import React, { useContext, useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";

const LogoutScreen = () => {
  const { logOut } = useContext(AuthContext);

  useEffect(() => {
    logOut();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        backgroundColor: "#4834D4",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size="large" />
    </View>
  );
};

export default LogoutScreen;
