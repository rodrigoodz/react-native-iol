import React from "react";
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
import MarketsScreen from "./src/screens/MarketsScreen";
import StatisticsScreen from "./src/screens/StatisticsScreen";
import OperationsHistoryScreen from "./src/screens/OperationsHistoryScreen/OperationsHistoryScreen";
import { AntDesign } from "@expo/vector-icons";
import { Text } from "react-native";

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

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
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
        }}
        onPress={() => alert("Logged out")}
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
        backgroundColor: "#130F40",
      }}
      drawerContentOptions={{
        activeTintColor: "white",
        activeBackgroundColor: "black",
        labelStyle: { color: "white", fontSize: 22 },
        itemStyle: { borderRadius: 10 },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Inicio" component={HomeNavigator} />
      <Drawer.Screen name="Portafolio" component={PortfolioScreen} />
      <Drawer.Screen name="Operar" component={BuySellScreen} />
      <Drawer.Screen name="Operaciones" component={OperationsHistoryScreen} />
      <Drawer.Screen name="Cotizaciones" component={MarketsScreen} />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {false ? (
          <Stack.Screen
            name="SignIn"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="Home"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
