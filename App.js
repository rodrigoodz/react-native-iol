import React from "react";
import { useFonts } from "expo-font";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import BuySellScreen from "./src/screens/BuySellScreen";
import PortfolioScreen from "./src/screens/PortfolioScreen/PortfolioScreen";
import MarketsScreen from "./src/screens/MarketsScreen/MarketsScreen";
import StatisticsScreen from "./src/screens/StatisticsScreen/StatisticsScreen";
import OperationsHistoryScreen from "./src/screens/OperationsHistoryScreen/OperationsHistoryScreen";
import { AntDesign } from "@expo/vector-icons";
import { Text } from "react-native";
import OperationScreen from "./src/screens/OperationScreen/OperationScreen";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { navigationRef } from "./RootNavigation";
import LogoutScreen from "./src/screens/LogoutScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Inicio"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Estadisticas"
        component={StatisticsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const OperationNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Operaciones"
        component={OperationsHistoryScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Operacion"
        component={OperationScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{
        flex: 1,
      }}
    >
      <DrawerItemList {...props} />
      <DrawerItem
        label={() => (
          <Text style={{ color: "white", fontSize: 22 }}>
            <AntDesign name="logout" size={20} color="white" />
            Salir
          </Text>
        )}
        style={{
          backgroundColor: "rgba(235,77,75,0.8)",
          position: "absolute",
          bottom: 10,
          width: "90%",
        }}
        onPress={() => props.navigation.navigate("Salir")}
      />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      hideStatusBar={false}
      drawerStyle={{
        backgroundColor: "#2b5a7f",
      }}
      drawerContentOptions={{
        activeBackgroundColor: "#193952",
        labelStyle: { color: "white", fontSize: 22 },
        itemStyle: { borderRadius: 10 },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Inicio" component={HomeNavigator} />
      <Drawer.Screen name="Portafolio" component={PortfolioScreen} />
      <Drawer.Screen name="Operar" component={BuySellScreen} />
      <Drawer.Screen name="Operaciones" component={OperationNavigator} />
      <Drawer.Screen name="Cotizaciones" component={MarketsScreen} />
    </Drawer.Navigator>
  );
};

const App = () => {
  const [loaded] = useFonts({
    SairaBold: require("./assets/fonts/Saira-Bold.ttf"),
    SairaLight: require("./assets/fonts/Saira-Light.ttf"),
    SairaSemiBold: require("./assets/fonts/Saira-SemiBold.ttf"),
    SairaThin: require("./assets/fonts/Saira-Thin.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <AuthProvider>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            component={LoginScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Home"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Salir"
            component={LogoutScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
