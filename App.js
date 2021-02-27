import React from "react";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BuySellScreen from "./src/screens/BuySellScreen";
import PortfolioScreen from "./src/screens/PortfolioScreen";
import MarketsScreen from "./src/screens/MarketsScreen";
import StatisticsScreen from "./src/screens/StatisticsScreen";

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

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home" hideStatusBar={true}>
      <Drawer.Screen name="Inicio" component={HomeNavigator} />
      <Drawer.Screen name="Portafolio" component={PortfolioScreen} />
      <Drawer.Screen name="Operar" component={BuySellScreen} />
      <Drawer.Screen name="Cotizaciones" component={MarketsScreen} />
    </Drawer.Navigator>
  );
};

function App() {
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
}

export default App;
