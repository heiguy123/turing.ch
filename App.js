import * as React from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 2,
    backgroundColor: colors.blue,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
