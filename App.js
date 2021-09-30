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
import { Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useFonts } from "expo-font";
import colors from "./config/colors";
import fonts from "./config/fonts";
import GetStarted from "./screens/GetStarted";

export default function App() {
  let [fontloaded, error] = useFonts({
    Normal: Roboto_500Medium,
    Bold: Roboto_700Bold,
  });
  if (!fontloaded) {
    return <AppLoading />;
  }

  return GetStarted();
  // <SafeAreaView style={styles.container}>
  //   <View style={{ flex: 0.5, justifyContent: "flex-start" }}>
  //     <Text style={fonts.title1}>Sunlight</Text>
  //     <Text style={fonts.title2}>Detector App </Text>
  //     <View style={{ width: "80%", height: "25%", top: 20 }}>
  //       <Text style={fonts.desc1}>
  //         ghasgb tbW TBW Tbwb twt wntyndygfdghe gra gae gedrageda g aegeryhe
  //         ga hegeagerfds fgdg agad dfagfda hyad gfdag adgfdag adygad
  //       </Text>
  //     </View>
  //   </View>
  //   <StatusBar style="auto" />
  // </SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    fontSize: 100,
    flex: 1,
    backgroundColor: colors.blue,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  // title1: {
  //   fontFamily: "Bold",
  //   fontSize: 48,
  //   color: colors.yellow,
  //   textAlign: "center",
  //   letterSpacing: 0.15,
  // },
  // title2: {
  //   fontFamily: "Bold",
  //   fontSize: 48,
  //   color: colors.white,
  //   textAlign: "center",
  //   letterSpacing: 0.15,
  // },
  // title3: {
  //   fontFamily: "Bold",
  //   fontSize: 48,
  //   color: colors.black,
  //   textAlign: "center",
  //   letterSpacing: 0.15,
  // },
  // desc1: {
  //   fontFamily: "Normal",
  //   fontSize: 14,
  //   color: colors.white,
  //   textAlign: "center",
  //   lineHeight: 24,
  //   letterSpacing: 0.15,
  // },
});
