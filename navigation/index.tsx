import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/home/Home";

const screenOptions: NativeStackNavigationOptions = {
  animation: "slide_from_right",
  headerShown: false,
  headerTitleAlign: "center",
  headerTitleStyle: { fontSize: 15 },
};

export default function Navigation() {
    
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};