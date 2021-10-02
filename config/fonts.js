import { Dimensions, StyleSheet } from "react-native";
import colors from "./colors";
const mobileWidth = Dimensions.get("screen").width;
const widthmul = mobileWidth / 400;

export default StyleSheet.create({
  h1: {
    fontFamily: "Bold",
    fontSize: 48 * widthmul,
    color: colors.black,
    letterSpacing: 0.15,
  },
  h2: {
    fontFamily: "Bold",
    fontSize: 32 * widthmul,
    color: colors.black,
    letterSpacing: 0.15,
  },
  h3: {
    fontFamily: "Normal",
    fontSize: 24 * widthmul,
    color: colors.black,
    letterSpacing: 0.15,
  },
  h4: {
    fontFamily: "Normal",
    fontSize: 18 * widthmul,
    color: colors.black,
    letterSpacing: 0.15,
  },
  p: {
    fontFamily: "Regular",
    fontSize: 14 * widthmul,
    color: colors.black,
    letterSpacing: 0.15,
  },
});
