import { StyleSheet } from "react-native";
import colors from "./colors";

export default StyleSheet.create({
  h1: {
    fontFamily: "Bold",
    fontSize: 48,
    color: colors.black,
    textAlign: "center",
    letterSpacing: 0.15,
  },
  h2: {
    fontFamily: "Bold",
    fontSize: 32,
    color: colors.black,
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
    color: colors.black,
    textAlign: "center",
    letterSpacing: 0.15,
  },
});

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  // font sizes
  largeTitle: 50,
  h1: 48,
  h2: 32,
  h3: 24,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,
  p: 14,
};
