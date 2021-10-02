import * as React from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Text,
  Pressable,
  Image,
  View,
  StatusBar,
  Button,
} from "react-native";
import AppLoading from "expo-app-loading";
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { useFonts } from "expo-font";
import GetStarted from "./screens/GetStarted";
import Location from "./screens/Location";
import SetLocation from "./screens/SetLocation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "./screens/Dashboard";

const Stack = createNativeStackNavigator();

function App() {
  let [fontloaded, error] = useFonts({
    Regular: Roboto_400Regular,
    Normal: Roboto_500Medium,
    Bold: Roboto_700Bold,
  });
  if (!fontloaded) {
    return <AppLoading />;
  }

  // return SetLocation();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SetLocation"
        screenOptions={{ headerShown: false, animation: "none" }}
      >
        <Stack.Screen name="GetStarted" component={GetStarted} /> 
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="SetLocation" component={SetLocation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
