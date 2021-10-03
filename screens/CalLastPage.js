import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Platform,
  SafeAreaView,
  Image,
  TextInput,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import fonts from "../config/fonts";
import colors from "../config/colors";
import navbar from "../config/navbar";
const sbspace = Platform.OS === "android" ? StatusBar.currentHeight : 0;
const CalLastPage = ({ navigation, route }) => {
  console.log(route.params);
  return (
    <View style={CalLast.container}>
      <View style={CalLast.upperText}>
        <Text style={[fonts.h3, CalLast.textBase]}>
          Congrats!{"\n"}You will save up to
        </Text>
        <Text style={[fonts.h3, CalLast.textBase, { fontSize: 72 }]}>
          {parseInt(route.params.percentageSaved)}%
        </Text>
        <Text style={[fonts.p, CalLast.textBase, { fontFamily: "Normal" }]}>
          Estimated Electricity
        </Text>
        <Text style={[fonts.h2, CalLast.textBase, { bottom: "13%" }]}>
          {parseInt(route.params.powerGenerated)} kWh
        </Text>
        <Text
          style={[
            fonts.h3,
            CalLast.textBase,
            {
              bottom: "5%",
              position: "absolute",
            },
          ]}
        >
          generated !
        </Text>
        <Image
          style={CalLast.picture}
          source={require("../assets/officework.png")}
        />
      </View>
      <View style={CalLast.Graph}>
        <Text style={CalLast.SummaryText}>Summary</Text>
        <View style={CalLast.GraphBox} />
      </View>
      <View style={navbar.navBottom}>
        <View style={[styles.row, { paddingTop: "5%", paddingBottom: "16%" }]}>
          <TouchableHighlight
            style={(navbar.navButton, styles.col4)}
            // onPress={() =>
            //   navigation.navigate("CalChoose", {
            //     location: route.params.location,
            //   })
            // }
            activeOpacity={0.65}
            underlayColor={"rgba(255,255,255,0)"}
          >
            <View
              style={[
                {
                  paddingLeft: "5%",
                  paddingRight: "5%",
                  alignItems: "center",
                },
              ]}
            >
              <Image
                style={navbar.navIcon}
                source={require("../assets/icon-calculator.png")}
              />
              <Text style={[fonts.p, { marginBottom: 5 }]}>Calculator</Text>
              <View style={navbar.navLabelActive}></View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={(navbar.navButton, styles.col4)}
            onPress={() =>
              navigation.navigate("Dashboard", {
                location: route.params.location,
              })
            }
            activeOpacity={0.65}
            underlayColor={"rgba(255,255,255,0)"}
          >
            <View
              style={[
                {
                  paddingLeft: "5%",
                  paddingRight: "5%",
                  alignItems: "center",
                },
              ]}
            >
              <Image
                style={navbar.navIcon}
                source={require("../assets/icon-home-inactive.png")}
              />
              <Text style={[fonts.p, navbar.navInactive, { marginBottom: 5 }]}>
                Dashboard
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={(navbar.navButton, styles.col4)}
            onPress={() => Alert.alert("DEF")}
            activeOpacity={0.65}
            underlayColor={"rgba(255,255,255,0)"}
          >
            <View
              style={[
                {
                  paddingLeft: "5%",
                  paddingRight: "5%",
                  alignItems: "center",
                },
              ]}
            >
              <Image
                style={navbar.navIcon}
                source={require("../assets/icon-settings-inactive.png")}
              />
              <Text style={[fonts.p, navbar.navInactive, { marginBottom: 5 }]}>
                Settings
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default CalLastPage;

const CalLast = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: sbspace,
  },
  upperText: {
    height: "42%",
    width: "100%",
    justifyContent: "flex-end",
  },
  textBase: {
    paddingLeft: "5%",
    position: "relative",
    bottom: "25%",
    fontFamily: "Bold",
  },
  picture: {
    position: "absolute",
    left: "20%",
    resizeMode: "contain",
    height: "75%",
  },
  Graph: {
    top: "42%",
    position: "absolute",
    width: "100%",
    height: "58%",
  },
  SummaryText: {
    paddingLeft: "5%",
    position: "absolute",
    paddingTop: "10%",
    fontWeight: "bold",
    color: "#000",
  },
  GraphBox: {
    backgroundColor: "#DDDDDD",
    width: "90%",
    height: "45%",
    position: "absolute",
    left: "5%",
    top: "18%",
  },
});

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  col4: {
    maxWidth: "33%",
    flexBasis: "33%",
  },
});
