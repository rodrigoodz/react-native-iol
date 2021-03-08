import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";
import BuySellScreen from "./src/screens/BuySellScreen";
import OperationsHistoryScreen from "./src/screens/OperationsHistoryScreen/OperationsHistoryScreen";
import PortfolioScreen from "./src/screens/PortfolioScreen/PortfolioScreen";
import MarketsScreen from "./src/screens/MarketsScreen/MarketsScreen";
import StatisticsScreen from "./src/screens/StatisticsScreen/StatisticsScreen";
import LogoutScreen from "./src/screens/LogoutScreen";
import OperationScreen from "./src/screens/OperationScreen/OperationScreen";
import TickerScreen from "./src/screens/TickerScreen/TickerScreen";
import ChartsScreen from "./src/screens/ChartsScreen/ChartsScreen";
import FetchInfoScreen from "./src/screens/FetchInfoScreen/FetchInfoScreen";

import { navigationRef } from "./RootNavigation";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as FetchProvider } from "./src/context/FetchContext";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const navigatorOptions = {
  headerShown: false,
  cardStyle: { backgroundColor: "transparent" },
  cardStyleInterpolator: ({ current: { progress } }) => ({
    cardStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
      }),
    },
    overlayStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.5],
        extrapolate: "clamp",
      }),
    },
  }),
};

const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={navigatorOptions}>
      <Stack.Screen name="Inicio" component={HomeScreen} />
      <Stack.Screen name="Estadisticas" component={StatisticsScreen} />
      <Stack.Screen name="FetchInfo" component={FetchInfoScreen} />
      
    </Stack.Navigator>
  );
};

const OperationNavigator = () => {
  return (
    <Stack.Navigator screenOptions={navigatorOptions}>
      <Stack.Screen name="Operaciones" component={OperationsHistoryScreen} />
      <Stack.Screen name="Operacion" component={OperationScreen} />
    </Stack.Navigator>
  );
};

const MarketNavigator = () => {
  return (
    <Stack.Navigator screenOptions={navigatorOptions}>
      <Stack.Screen name="Cotizaciones" component={MarketsScreen} />
      <Stack.Screen name="Ticker" component={TickerScreen} />
      <Stack.Screen name="Grafico" component={ChartsScreen} />
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
      <Drawer.Screen name="Cotizaciones" component={MarketNavigator} />
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
    <FetchProvider>
      <AuthProvider>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator screenOptions={navigatorOptions}>
            <Stack.Screen name="SignIn" component={LoginScreen} />
            <Stack.Screen name="Home" component={DrawerNavigator} />
            <Stack.Screen name="Salir" component={LogoutScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthProvider>
    </FetchProvider>
  );
};

export default App;
