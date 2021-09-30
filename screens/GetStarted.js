import * as React from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableHighlight,
  Image,
  Dimensions,
} from "react-native";
import colors from "../config/colors";
import fonts from "../config/fonts";

export default function GetStarted() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Image style={styles.sun} source={require("../assets/sun.png")} />
        <Image
          style={styles.smarthome}
          source={require("../assets/smarthome.png")}
        />
      </View>
      <View style={{ flex: 0.52, justifyContent: "flex-start" }}>
        <Text style={[fonts.h1, { color: colors.yellow }]}>Sunlight</Text>
        <Text style={[fonts.h1, { color: colors.white }]}>Detector App</Text>
        <View style={{ maxWidth: "90%", height: "25%", top: "4%" }}>
          <Text style={[fonts.p, { color: colors.white }]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            velit tellus, sodales id placerat at, finibus non urna. Morbi a
            lacus tellus.
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            top: "8%",
          }}
        >
          <TouchableHighlight style={styles.button}>
            <Text style={[fonts.h4, { color: colors.white }]}>Get Started</Text>
          </TouchableHighlight>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
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
  button: {
    width: 278,
    height: 46,
    borderWidth: 0,
    borderRadius: 16,
    backgroundColor: colors.yellow,
    justifyContent: "center",
  },
  top: {
    flex: 0.48,
    justifyContent: "flex-end",
  },
  smarthome: {
    flexBasis: "75%",
    aspectRatio: 1.24,
    bottom: 5,
  },
  sun: {
    width: 75,
    height: 150,
    alignSelf: "flex-end",
    left: "10.5%",
    top: "25%",
  },
});
