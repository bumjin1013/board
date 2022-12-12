import * as React from "react";
import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import Home from "../../screens/home/Home";

const screenOptions: NativeStackNavigationOptions = {
  animation: "slide_from_right",
  headerTitleAlign: "center",
  headerTitleStyle: { fontSize: 16 },
  headerShadowVisible: false,
};

export default function Main() {

  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Stack.Group>
        <Stack.Screen name="Home" component={Home}/>
      </Stack.Group>
    </Stack.Navigator>
  );
};