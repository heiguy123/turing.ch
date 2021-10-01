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
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import fixassets from "../config/fixassets";

export default function GetStarted({ navigation: { navigate } }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary }}>
      <View style={styles.container}>
        <Image style={fixassets.sun} source={require("../assets/sun.png")} />
        <Image
          style={styles.smarthome}
          source={require("../assets/smarthome.png")}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
        }}
      >
        <Text style={[fonts.h1, { color: colors.secondary, lineHeight: 53.5 }]}>
          Sunlight
        </Text>
        <Text style={[fonts.h1, { color: colors.white, lineHeight: 53.5 }]}>
          Detector App
        </Text>
        <View style={{ height: "25%", top: "4%" }}>
          <Text
            style={[
              fonts.p,
              { color: colors.white, flexWrap: "wrap", lineHeight: 24 },
            ]}
          >
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
          <TouchableHighlight
            style={fixassets.button}
            onPress={() => navigate("Location")}
          >
            <Text style={[fonts.h4, { color: colors.white, lineHeight: 24 }]}>
              Get Started
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
  smarthome: {
    width: 299,
    height: 242,
    position: "absolute",
    alignSelf: "center",
    bottom: Dimensions.get("window").height * 0.015,
  },
});
