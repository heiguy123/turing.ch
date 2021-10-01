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
import colors from "./config/colors";
import fonts from "./config/fonts";
import GetStarted from "./screens/GetStarted";
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

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="GetStarted"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// function calculateMaxWidth() {
//   const dimensions = Dimensions.get('window');
//   return dimensions.width;
// }

// function calculateMaxHeight(ratio) {
//   const dimensions = Dimensions.get('window');
//   if (ratio == '100%') { return dimensions.width}
//   if (ratio == '75%') { return Math.round(dimensions.width * 3 / 4) }
//   if (ratio == '56.25%') { return Math.round(dimensions.width * 9 / 16) }
// }