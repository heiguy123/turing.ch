import { Dimensions, StyleSheet } from "react-native";
import colors from "./colors";
const mobileWidth = Dimensions.get("window").width;

export default StyleSheet.create(screenSize(mobileWidth));

function screenSize(width) {
  const style = {};
  if (width < 380) {
    Object.assign(style, {
      h1: {
        fontFamily: "Bold",
        fontSize: 28,
        color: colors.black,
        letterSpacing: 0.15,
        marginBottom: 24
      },
      h2: {
        fontFamily: "Bold",
        fontSize: 24,
        color: colors.black,
        letterSpacing: 0.15,
        marginBottom: 24
      },
      h3: {
        fontFamily: "Normal",
        fontSize: 20,
        color: colors.black,
        letterSpacing: 0.15,
        marginBottom: 24
      },
      h4: {
        fontFamily: "Normal",
        fontSize: 14,
        color: colors.black,
        letterSpacing: 0.15,
      },
      p: {
        fontFamily: "Regular",
        fontSize: 12,
        color: colors.black,
        letterSpacing: 0.15,
        marginBottom: 24
      }
    });
  }
  else {
    Object.assign(style, {
      h1: {
        fontFamily: "Bold",
        fontSize: 48,
        color: colors.black,
        letterSpacing: 0.15,
        marginBottom: 24
      },
      h2: {
        fontFamily: "Bold",
        fontSize: 32,
        color: colors.black,
        letterSpacing: 0.15,
        marginBottom: 24
      },
      h3: {
        fontFamily: "Normal",
        fontSize: 24,
        color: colors.black,
        letterSpacing: 0.15,
        marginBottom: 24
      },
      h4: {
        fontFamily: "Normal",
        fontSize: 18,
        color: colors.black,
        letterSpacing: 0.15,
      },
      p: {
        fontFamily: "Regular",
        fontSize: 14,
        color: colors.black,
        letterSpacing: 0.15,
        marginBottom: 24
      }
    });
  }
  return style;
}