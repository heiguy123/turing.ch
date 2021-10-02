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
  Alert,
} from "react-native";
import colors from "../config/colors";
import fonts from "../config/fonts";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import fixassets from "../config/fixassets";
const sbspace = Platform.OS === "android" ? StatusBar.currentHeight : 0;

export default function Settings({ navigation: { navigate } }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>

      <View style={ styles.container }>

        <View>
            <Image style={ fixassets.back }
            source={ require("../assets/blackback.png") }/>
        </View>

        <View style={ styles.textcontainer }>

            <View style= { styles.title1 }>
                <Text style={ fonts.h2 }>
                Settings
            </Text>
            </View>

            <View style= { styles.title2 }>
                <Text style={ fonts.h4 }>
                Default Temperature Unit 
                </Text>
                <Text style={ fonts.p }>
                Celcius {"\n"}{"\n"}{"\n"}
                </Text>
                <Text style={ fonts.h4 }>
                Default Humidity Unit 
                </Text>
                <Text style={ fonts.p }>
                g/kg {"\n"}{"\n"}{"\n"}
                </Text>
                <Text style={ fonts.h4 }>
                Default Solar Irradiance Unit
                </Text>
                <Text style={ fonts.p }>
                kWh/m2 {"\n"}{"\n"}{"\n"}
                </Text>
                <Text style={ fonts.h4 }>
                Reset to Default
                </Text>
                <Text style={ fonts.p }>
                Execute this if you found any bug {"\n"}{"\n"}{"\n"}
                </Text>
                <Text style={ fonts.h4 }>
                Contributors
                </Text>
                <Text style={ fonts.p }>
                Thanks for them who created the application {"\n"}{"\n"}{"\n"}
                </Text>
            </View>

        </View>

      </View>

      <View style={styles.navBottom}>
          <View style={[styles.row, {paddingTop: "5%", paddingBottom: "16%"}]}>
            <TouchableHighlight 
              style={styles.navButton, styles.col4}
              onPress={() => Alert.alert("ABC")}
              activeOpacity={0.65}
              underlayColor={"rgba(255,255,255,0)"}
            >
              <View style={[{paddingLeft: "5%", paddingRight: "5%", alignItems: "center"}]}>
                <Image 
                  style={styles.navIcon}
                  source={require("../assets/icon-calculator-inactive.png")} 
                />
                <Text style={[fonts.p, styles.navInactive, { marginBottom: 5}]}>Calculator</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight 
              style={styles.navButton, styles.col4}
              onPress={() => navigate("Dashboard")}
              activeOpacity={0.65}
              underlayColor={"rgba(255,255,255,0)"}
            >
              <View style={[{paddingLeft: "5%", paddingRight: "5%", alignItems: "center"}]}>
                <Image 
                  style={styles.navIcon}
                  source={require("../assets/icon-home-inactive.png")} 
                />
                <Text style={[fonts.p, { marginBottom: 5}]}>Dashboard</Text>
                <View style={styles.navInactive}></View>
              </View>
            </TouchableHighlight>
            <TouchableHighlight 
              style={styles.navButton, styles.col4}
              onPress={() => navigate("Settings")}
              activeOpacity={0.65}
              underlayColor={"rgba(255,255,255,0)"}
            >
              <View style={[{paddingLeft: "5%", paddingRight: "5%", alignItems: "center"}]}>
                <Image 
                  style={styles.navIcon}
                  source={require("../assets/icon-settings.png")} 
                />
                <Text style={[fonts.p, styles.navLabelActive, { marginBottom: 5}]}>Settings</Text>
              </View>
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
  textcontainer: {
      flex: 1,
      left: Dimensions.get("window").width * 0.06,
  },
  title1: {
      top: Dimensions.get("window").height * 0.10 + sbspace,
  },
  title2: {
      flex: 0.8,
      top: Dimensions.get("window").height * 0.15 + sbspace,
  },
  navBottom: {
    position: "absolute",
    bottom: -140,
    height: 200,
    alignSelf: "center",
    width: Math.round(Dimensions.get('screen').width * 1.02),
    backgroundColor: colors.white,
    borderRadius: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5
  },
  navButton: {
    alignItems: "center"
  },
  navIcon: {
    resizeMode: "contain",
    width: 30,
    height: 30,
    marginBottom: 8,
    zIndex: 3
  },
  navInactive: {
    color: "rgba(0,0,0,0.6)"
  },
  navLabelActive: {
    backgroundColor: colors.primary,
    borderRadius: 30,
    width: "100%",
    height: 26,
    position: "absolute",
    bottom: "-44%",
    zIndex: 10
  },
  col4: {
    maxWidth: "33%",
    flexBasis: "33%"
  },
  row: {
    flexDirection: "row"
  },
});
