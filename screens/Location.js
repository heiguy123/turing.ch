import * as React from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
  ToastAndroid,
  ActivityIndicator,
} from "react-native";
import colors from "../config/colors";
import fonts from "../config/fonts";
import fixassets from "../config/fixassets";
import useLocation from "../app/useLocation";
import loadingIndicator from "../app/components/loadingIndicator";

const Location = ({ navigation }) => {
  const currentlocation = useLocation();
  // if (Platform.OS === "android")
  //   if (location)
  //     ToastAndroid.show(JSON.stringify(location), ToastAndroid.SHORT);
  //   else {
  //     ToastAndroid.show("Waiting for location", ToastAndroid.SHORT);
  //   }
  // else {
  //   if (location) alert(JSON.stringify(location));
  //   else {
  //     alert("Waiting for location");
  //   }
  // }
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
        }}
      >
        <Text
          style={[
            fonts.h1,
            { color: colors.white, lineHeight: 53.5, textAlign: "center" },
          ]}
        >
          Where is {"\n"} your{" "}
          <Text style={[fonts.h1, { color: colors.secondary }]}>Location?</Text>
        </Text>
        <View style={{ height: "25%", top: "4%" }}>
          <Text style={[fonts.p, styles.desc, { textAlign: "center" }]}>
            We would like to access your GPS information {"\n"} for us to
            calibrate the past history records of the {"\n"} solar irradiance.{" "}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            top: "8%",
          }}
        >
          {currentlocation ? (
            <TouchableOpacity
              style={fixassets.button}
              //onPress={() => navigate("SetTime")}
              onPress={() =>
                navigation.navigate("Dashboard", { location: currentlocation })
              }
            >
              <Text
                style={[
                  fonts.h4,
                  { color: colors.white, lineHeight: 24, textAlign: "center" },
                ]}
              >
                Locate Me
              </Text>
            </TouchableOpacity>
          ) : (
            <View
              style={{
                height: 70,
                width: 70,
                top: 0,
                justifyContent: "center",
              }}
            >
              <ActivityIndicator size="large" color={colors.secondary} />
            </View>
          )}
        </View>
        <View style={{ top: 44 }}>
          {currentlocation ? (
            <Text
              style={[fonts.p, { color: colors.white, textAlign: "center" }]}
            >
              Prefer a specific location?{" "}
              <Text
                style={{
                  color: colors.white,
                  fontFamily: "Bold",
                }}
                onPress={() => {
                  navigation.navigate("SetLocation", {
                    location: currentlocation,
                  });
                }}
              >
                Click Here
              </Text>
            </Text>
          ) : null}
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Location;
const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
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
