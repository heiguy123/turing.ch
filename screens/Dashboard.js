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

export default function Dashboard({ navigation: { navigate } }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.whiteBg }}>
      <View style={[styles.container]}>
        <Image
          style={styles.topImage}
          source={require("../assets/dashboard.png")}
        />
      </View>
      <View style={styles.solarIrradiance}>
        <View style={styles.greyLabel}>
          <Image 
            style={styles.plane}
            source={require("../assets/plane.png")} 
          />
          <Text style={[fonts.p, {marginTop: -4, paddingLeft: 4, marginBottom: 0}]}>Miri, Sarawak</Text>
        </View>
        <Text style={[fonts.h1, {fontSize: 72, marginBottom: 0}]}>25%</Text>
        <Text style={fonts.p}>Average Solar Irradiance</Text>
      </View>
      <View
        style={{
          flex: 1,
          top: -85,
          paddingLeft: "5%",
          paddingRight: "5%"
        }}
      >
        <Text style={[fonts.h3, { color: colors.black, fontFamily: "Bold", marginBottom: 0}]}>
          Summary
        </Text>
        <View style={[styles.row, {paddingTop: 30, paddingBottom: 30}]}>
          <View style={[styles.col6, styles.row, {paddingLeft: 20, paddingRight: 20}]}>
            <View style={styles.col1, styles.progressBar}>
              <View style={styles.progressBarFilled}></View>
              <View style={styles.progressBarFilledCap}></View>
            </View>
            <View style={[styles.col11, {paddingLeft: 14}]}>
              <Text style={[fonts.p, {marginBottom: 4, marginTop: 8}]}>Avg. Temperature</Text>
              <Text style={[fonts.h3, {marginBottom: 0}]}>22.3°</Text>
            </View>
          </View>
          <View style={[styles.col6, styles.row, {paddingLeft: 20, paddingRight: 20}]}>
            <View style={styles.col1, styles.progressBar}>
              <View style={[styles.progressBarFilled, {height: 20}]}></View>
              <View style={[styles.progressBarFilledCap, {bottom: 20}]}></View>
            </View>
            <View style={[styles.col11, {paddingLeft: 14}]}>
              <Text style={[fonts.p, {marginBottom: 4, marginTop: 8}]}>Avg. Humidity</Text>
              <Text style={[fonts.h3, {marginBottom: 0}]}>11.8 g/kg</Text>
            </View>
          </View>
        </View>
        <View style={styles.hr}></View>
        <View style={[styles.row, {paddingTop: 30, paddingBottom: 60}]}>
          <View style={[styles.col6, styles.row, {paddingLeft: 20, paddingRight: 20}]}>
            <View style={styles.col1, styles.progressBar}>
              <View style={styles.progressBarFilled}></View>
              <View style={styles.progressBarFilledCap}></View>
            </View>
            <View style={[styles.col11, {paddingLeft: 14}]}>
              <Text style={[fonts.p, {marginBottom: 4, marginTop: 8}]}>Avg. Percipitation</Text>
              <Text style={[fonts.h3, {marginBottom: 0}]}>4.08 mm</Text>
            </View>
          </View>
          <View style={[styles.col6, styles.row, {paddingLeft: 20, paddingRight: 20}]}>
            <View style={styles.col1, styles.progressBar}>
              <View style={[styles.progressBarFilled, {height: 20}]}></View>
              <View style={[styles.progressBarFilledCap, {bottom: 20}]}></View>
            </View>
            <View style={[styles.col11, {paddingLeft: 14}]}>
              <Text style={[fonts.p, {marginBottom: 4, marginTop: 8}]}>Avg. Cloud Amount</Text>
              <Text style={[fonts.h3, {marginBottom: 0}]}>30%</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <TouchableHighlight
            style={styles.button}
            onPress={() => navigate("GetStarted")}
          >
            <Text style={[fonts.h4, { color: colors.white, lineHeight: 24, textAlign: "center" }]}>
              More Details
            </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.navBottom}>
          <View style={[styles.row, {paddingTop: 30, paddingBottom: 60}]}>
            <View style={[styles.col4, {paddingLeft: 30, paddingRight: 30, alignItems: "center"}]}>
              <Image 
                style={styles.navIcon}
                source={require("../assets/icon-calculator-inactive.png")} 
              />
              <Text style={[fonts.p, styles.navInactive, { marginBottom: 0}]}>Calculator</Text>
            </View>
            <View style={[styles.col4, {paddingLeft: 30, paddingRight: 30, alignItems: "center"}]}>
              <Image 
                style={styles.navIcon}
                source={require("../assets/icon-home.png")} 
              />
              <Text style={[fonts.p, { marginBottom: 0}]}>Dashboard</Text>
            </View>
            <View style={[styles.col4, {paddingLeft: 30, paddingRight: 30, alignItems: "center"}]}>
              <Image 
                style={styles.navIcon}
                source={require("../assets/icon-settings-inactive.png")} 
              />
              <Text style={[fonts.p, styles.navInactive, { marginBottom: 0}]}>Settings</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1
  },
  button: {
    width: 278,
    height: 46,
    borderWidth: 0,
    borderRadius: 16,
    backgroundColor: colors.primary,
    justifyContent: "center",
  },
  topImage: {
    resizeMode: "contain",
    width: Dimensions.get("window").width,
    position: "absolute",
    alignSelf: "center",
    top: -110,
    zIndex: 0
  },
  plane: {
    resizeMode: "contain",
    width: 16,
    marginTop: -8,
    marginBottom: 4
  },
  greyLabel: {
    backgroundColor: "#E4E4E4",
    borderRadius: 6,
    padding: 10,
    paddingBottom: 0,
    display: "flex",
    flexDirection: "row",
    width: 120
  },
  solarIrradiance: {
    position: "absolute",
    top: "12%",
    left: "10%"
  },
  progressBar: {
    height: 70,
    width: 2,
    backgroundColor: "#DDDDDD"
  },
  progressBarFilled: {
    position: "absolute",
    height: 40,
    width: 6,
    bottom: 0,
    right: -2,
    backgroundColor: colors.primary
  },
  progressBarFilledCap: {
    position: "absolute",
    height: 2,
    width: 10,
    bottom: 40,
    right: -4,
    backgroundColor: colors.primary
  },
  navBottom: {
    position: "absolute",
    bottom: -180,
    minHeight: 200,
    alignSelf: "center",
    width: Math.round(Dimensions.get('window').width * 1.02),
    backgroundColor: colors.white,
    borderRadius: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5
  },
  navIcon: {
    resizeMode: "contain",
    width: 30,
    height: 30,
    marginBottom: 8,
    zIndex: 9999
  },
  navInactive: {
    color: "rgba(0,0,0,0.6)"
  },
  hr: {
    alignSelf: "center",
    width: "90%",
    height: 1,
    backgroundColor: "#D9D9D9"
  },
  row: {
    flexDirection: "row"
  },
  col1: {
    maxWidth: "10%",
    flexBasis: "10%"
  },
  col2: {
    maxWidth: "20%",
    flexBasis: "20%"
  },
  col3: {
    maxWidth: "30%",
    flexBasis: "30%"
  },
  col4: {
    maxWidth: "33%",
    flexBasis: "33%"
  },
  col6: {
    maxWidth: "50%",
    flexBasis: "50%"
  },
  col8: {
    maxWidth: "66%",
    flexBasis: "66%"
  },
  col9: {
    maxWidth: "70%",
    flexBasis: "70%"
  },
  col10: {
    maxWidth: "80%",
    flexBasis: "80%"
  },
  col11: {
    maxWidth: "90%",
    flexBasis: "90%"
  },
  col12: {
    maxWidth: "100%",
    flexBasis: "100%"
  }
});