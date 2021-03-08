import React, { useContext, useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

import { Context as AuthContext } from "../context/AuthContext";
import { Context as FetchContext } from "../context/FetchContext";

const LogoutScreen = () => {
  const { logOut } = useContext(AuthContext);
  const { resetFetchCounter } = useContext(FetchContext);

  useEffect(() => {
    logOut();
    resetFetchCounter();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        backgroundColor: "#131e31",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size="large" />
    </View>
  );
};

export default LogoutScreen;
