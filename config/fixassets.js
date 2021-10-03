import { StyleSheet, Dimensions, StatusBar } from "react-native";
import colors from "./colors";

const sbspace = Platform.OS === "android" ? StatusBar.currentHeight : 0;
export default StyleSheet.create({
  back: {
    width: 53,
    height: 24,
    left: Dimensions.get("window").width * 0.06,
    top: Dimensions.get("window").height * 0.04,
    position: "absolute",
  },
  buttonb: {
    width: 278,
    height: 46,
    borderWidth: 0,
    borderRadius: 16,
    backgroundColor: colors.primary,
    justifyContent: "center",
  },
  button: {
    width: 278,
    height: 46,
    borderWidth: 0,
    borderRadius: 16,
    backgroundColor: colors.secondary,
    justifyContent: "center",
  },
  sun: {
    width: 65,
    height: 130,
    position: "absolute",
    right: 0,
    top: sbspace,
  },
});
