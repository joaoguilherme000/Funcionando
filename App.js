import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeComponent from "./src/Home/HomeComponent";
import Page2Component from "./src/Pages/Page2Component";
import ImagensComponent from "./src/Pages/ImagensComponent";

const Stack = createStackNavigator();

const deslizar = ({ current, next, layouts }) => {
  const translateX = current.progress.interpolate({
    inputRange: [0, 1],
    outputRange: [layouts.screen.width, 0],
  });

  const slideFromRight = { transform: [{ translateX }] };

  return {
    cardStyle: slideFromRight,
  };
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#262626" },
          headerShadowVisible: false,
          headerTitleStyle: { color: "#f4a100" },
          cardStyleInterpolator: deslizar,
        }}
        initialRouteName="HomeComponent"
      >
        <Stack.Screen
          screenOptions={{
            gestureEnabled: true,
            gestureDirection: "vertical",
          }}
          name="Pagina inicial"
          component={HomeComponent}
        />
        <Stack.Screen name="Page2Component" component={Page2Component} />
        <Stack.Screen name="ImagensComponent" component={ImagensComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
