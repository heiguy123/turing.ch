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
import fixassets from "../config/fixassets";

export default function Location({ navigation: {navigate} }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary }}>
      <View style={styles.container}>
        <Image style={fixassets.sun} source={require("../assets/sun.png")} />
        <Image
          style={styles.smarthome}
          source={require("../assets/undraw_map.png")}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          backgroundColor: colors.black,
        }}
      >
        <Text style={[fonts.h1, { color: colors.white, lineHeight: 53.5 }]}>
          Where is {"\n"} your{" "}
          <Text style={[fonts.h1, { color: colors.secondary }]}>Location?</Text>
        </Text>
        <View style={{ height: "25%", top: "4%" }}>
          <Text style={[fonts.p, styles.desc]}>
            We would like to access your GPS information {"\n"} for us to
            calibrate the past history records of the {"\n"} solar irradiance.
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
            //onPress={() => navigate("SetTime")}
            // onPress={() => navigation.goBack()}
            onPress={() => navigate("Dashboard")}
          >
            <Text style={[fonts.h4, { color: colors.white, lineHeight: 24 }]}>
              Locate Me
            </Text>
          </TouchableHighlight>
        </View>
        <View style={{ top: 44 }}>
          <Text style={[fonts.p, { color: colors.white }]}>
            Prefer a specific location?{" "}
            <Text
              style={{ fontFamily: "Bold" }}
              onPress={() => navigate("SetLocation")}
            >
              Click Here
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: colors.white,
  },
  desc: {
    marginHorizontal: "8%",
    alignContent: "center",
    flexDirection: "row",
    color: colors.white,
    flexWrap: "wrap",
    lineHeight: 24,
  },
  smarthome: {
    width: 280,
    height: 225,
    position: "absolute",
    alignSelf: "center",
    bottom: Dimensions.get("window").height * 0.04,
  },
});
