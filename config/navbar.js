import { Dimensions, StyleSheet } from "react-native";
import colors from "./colors";

export default StyleSheet.create({
  navBottom: {
    position: "absolute",
    bottom: -105,
    height: 200,
    alignSelf: "center",
    width: Math.round(Dimensions.get("screen").width * 1.02),
    backgroundColor: colors.white,
    borderRadius: 60,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  navButton: {
    alignItems: "center",
  },
  navIcon: {
    resizeMode: "contain",
    width: 30,
    height: 30,
    marginBottom: 8,
    zIndex: 3,
  },
  navInactive: {
    color: "rgba(0,0,0,0.6)",
  },
  navLabelActive: {
    backgroundColor: colors.primary,
    borderRadius: 30,
    width: "100%",
    height: 26,
    position: "absolute",
    bottom: "-44%",
    zIndex: 10,
  }
});
