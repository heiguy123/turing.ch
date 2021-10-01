import AppLoading from "expo-app-loading";
import { Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useFonts } from "expo-font";
import { StyleSheet } from "react-native";
import colors from "../colors";

let [fontloaded, error] = useFonts({
  Normal: Roboto_500Medium,
  Bold: Roboto_700Bold,
});
if (!fontloaded) {
  <AppLoading />;
}

export default StyleSheet.create({
  title1: {
    fontFamily: "Bold",
    fontSize: 48,
    color: colors.yellow,
    textAlign: "center",
    letterSpacing: 0.15,
  },
  title2: {
    fontFamily: "Bold",
    fontSize: 48,
    color: colors.white,
    textAlign: "center",
    letterSpacing: 0.15,
  },
  title3: {
    fontFamily: "Bold",
    fontSize: 48,
    color: colors.black,
    textAlign: "center",
    letterSpacing: 0.15,
  },
  desc1: {
    fontFamily: "Normal",
    fontSize: 14,
    color: colors.white,
    textAlign: "center",
    lineHeight: 24,
    letterSpacing: 0.15,
  },
});
