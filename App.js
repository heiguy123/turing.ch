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
  StatusBarIOS,
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
import ViewGraphIndex from "./screens/ViewGraphIndex";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "./screens/Dashboard";
import CalChoose from "./screens/CalChoose";
import DefaultPage from "./screens/DefaultPage";
import CustomisePage from "./screens/CustomisePage";
import CalLastPage from "./screens/CalLastPage";
import TimeRange from "./screens/TimeRange";
import SettingsPage from "./screens/Settings";

const Stack = createNativeStackNavigator();

function App() {
  //YellowBox.ignoreWarnings(["Require cycle"]);
  console.disableYellowBox = true;
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
        screenOptions={{ headerShown: false, animation: "none" }}
      >
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="SetLocation" component={SetLocation} />
        <Stack.Screen name="TimeRange" component={TimeRange} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="ViewGraphIndex" component={ViewGraphIndex} />
        <Stack.Screen name="CalChoose" component={CalChoose} />
        <Stack.Screen name="DefaultPage" component={DefaultPage} />
        <Stack.Screen name="CustomisePage" component={CustomisePage} />
        <Stack.Screen name="CalLastPage" component={CalLastPage} />
        <Stack.Screen name="Settings" component={SettingsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
