import { StyleSheet } from "react-native";
import colors from "./colors";

export default StyleSheet.create({
  h1: {
    fontFamily: "Bold",
    fontSize: 48,
    //color: colors.yellow,
    textAlign: "center",
    letterSpacing: 0.15,
  },
  h2: {
    fontFamily: "Bold",
    fontSize: 32,
    color: colors.white,
    textAlign: "center",
    letterSpacing: 0.15,
  },
  h3: {
    fontFamily: "Normal",
    fontSize: 24,
    color: colors.black,
    textAlign: "center",
    letterSpacing: 0.15,
  },
  h4: {
    fontFamily: "Normal",
    fontSize: 18,
    color: colors.black,
    textAlign: "center",
    letterSpacing: 0.15,
  },
  p: {
    fontFamily: "Regular",
    fontSize: 14,
    color: colors.white,
    textAlign: "center",
    lineHeight: 24,
    letterSpacing: 0.15,
  },
});
